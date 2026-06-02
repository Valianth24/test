'use strict';

const QuizManager = {
state: {
currentMode: null,
questions: [],
currentIndex: 0,
answers: [],
startTime: null,
timerInterval: null,
elapsedSeconds: 0,
isReviewing: false,
testTitle: null,
testDescription: null,
eventListenersAttached: false
},

// ✅ sorular.js geç yüklenirse diye kısa bekleme
waitForQuestionBank(timeoutMs = 2500) {
return new Promise((resolve) => {
const start = Date.now();

```
  const tick = () => {
    const qb = window.questionBank;
    if (Array.isArray(qb) && qb.length > 0) return resolve(true);

    if (Date.now() - start >= timeoutMs) return resolve(false);
    setTimeout(tick, 50);
  };

  tick();
});
```

},

// ✅ DOĞRU CEVAP INDEX'İNİ GÜVENLİ ALIR
// Bizim soru formatımızda a = doğru şık index'i
// Örnek: a: 0 => A, a: 1 => B, a: 2 => C
// Ayrıca AI testlerde cevap metin ya da "A/B/C" gibi gelirse de destekler.
getCorrectAnswerIndex(question) {
if (!question || !Array.isArray(question.o)) return -1;

```
// Yeni format: a sayı ise direkt index kabul et
if (typeof question.a === 'number') {
  return question.a >= 0 && question.a < question.o.length ? question.a : -1;
}

// Eski/AI format: a string gelirse dönüştür
if (typeof question.a === 'string') {
  const answer = question.a.trim();

  // "0", "1", "2" gibi sayı string gelirse
  if (/^\d+$/.test(answer)) {
    const numericIndex = Number(answer);
    return numericIndex >= 0 && numericIndex < question.o.length ? numericIndex : -1;
  }

  // "A", "B", "C", "D", "E" gibi gelirse
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const letterIndex = letters.indexOf(answer.toUpperCase());
  if (letterIndex !== -1 && letterIndex < question.o.length) {
    return letterIndex;
  }

  // Cevap doğrudan seçenek metni olarak gelirse
  const textIndex = question.o.findIndex(opt =>
    String(opt).trim().toLowerCase() === answer.toLowerCase()
  );

  return textIndex;
}

return -1;
```

},

loadAIGeneratedTest() {
try {
const aiTest = localStorage.getItem('testify_generated_test');
if (!aiTest) {
console.log('ℹ️ AI testi bulunamadı');
return null;
}

```
  const testData = JSON.parse(aiTest);

  if (testData.expiresAt && Date.now() > testData.expiresAt) {
    console.log('⏰ AI testi süresi dolmuş');
    localStorage.removeItem('testify_generated_test');
    return null;
  }

  console.log('✅ AI testi yüklendi:', testData.title);
  console.log('📊 Soru sayısı:', testData.questions.length);
  return testData;
} catch (error) {
  console.error('❌ AI test yükleme hatası:', error);
  return null;
}
```

},

// ✅ PRACTICE/EXAM her zaman window.questionBank
// ✅ AI/CUSTOM varsa localStorage AI testi, yoksa window.questionBank
async startQuiz(mode) {
console.log('🎯 Quiz başlatılıyor, mod:', mode);

```
this.cleanupPreviousQuiz();

try {
  const useAI = (mode === 'ai' || mode === 'custom');
  const aiTest = useAI ? this.loadAIGeneratedTest() : null;

  if (useAI && aiTest && aiTest.questions && aiTest.questions.length > 0) {
    console.log('🤖 AI testi kullanılıyor');

    this.state = {
      currentMode: 'ai',
      questions: aiTest.questions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      timerInterval: null,
      elapsedSeconds: 0,
      isReviewing: false,
      testTitle: aiTest.title,
      testDescription: aiTest.description,
      eventListenersAttached: this.state.eventListenersAttached
    };

    this.state.answers = new Array(aiTest.questions.length).fill(null);

    Utils.showToast(`🤖 AI Testi: ${aiTest.title} - ${aiTest.questions.length} soru`, 'info', 4000);
  } else {
    console.log('📚 Varsayılan sorular (sorular.js) kullanılıyor');

    const ok = await this.waitForQuestionBank(2500);
    if (!ok) {
      Utils.showToast('Soru bankası yüklenemedi! (sorular.js yüklenmemiş olabilir)', 'error');
      console.error('questionBank bulunamadı veya dolmadı!', window.questionBank);
      return;
    }

    if (!window.questionBank || !Array.isArray(window.questionBank)) {
      Utils.showToast('Soru bankası yüklenemedi!', 'error');
      console.error('questionBank bulunamadı!');
      return;
    }

    if (window.questionBank.length === 0) {
      Utils.showToast('Soru bankası boş!', 'error');
      return;
    }

    const allQuestions = [...window.questionBank];

    this.state = {
      currentMode: mode,
      questions: Utils.shuffleArray(allQuestions),
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      timerInterval: null,
      elapsedSeconds: 0,
      isReviewing: false,
      testTitle: null,
      testDescription: null,
      eventListenersAttached: this.state.eventListenersAttached
    };

    this.state.answers = new Array(this.state.questions.length).fill(null);
  }

  console.log(`✅ ${this.state.questions.length} soru yüklendi`);

  const testSelection = document.getElementById('testSelection');
  const quizPage = document.getElementById('quizPage');

  if (!testSelection || !quizPage) throw new Error('Quiz sayfaları bulunamadı');

  testSelection.classList.remove('active');
  quizPage.classList.add('active');

  this.showExitButton();
  this.startTimer();
  this.displayQuestion();
  this.saveState();

  Utils.showToast(`Test başladı! ${this.state.questions.length} soru - Bol şans!`, 'success');
} catch (error) {
  console.error('❌ Quiz başlatma hatası:', error);
  Utils.showToast('Test başlatılamadı: ' + error.message, 'error');
}
```

},

cleanupPreviousQuiz() {
if (this.state.timerInterval) {
clearInterval(this.state.timerInterval);
this.state.timerInterval = null;
console.log('🧹 Önceki timer temizlendi');
}

```
const optionsList = document.getElementById('optionsList');
if (optionsList) optionsList.innerHTML = '';
```

},

showExitButton() {
const exitBtn = document.getElementById('exitQuizBtn');
if (exitBtn) exitBtn.style.display = this.state.isReviewing ? 'none' : 'inline-flex';
},

saveState() {
try {
if (window.StorageManager) {
StorageManager.saveQuizState({
currentMode: this.state.currentMode,
currentIndex: this.state.currentIndex,
answers: this.state.answers,
startTime: this.state.startTime,
elapsedSeconds: this.state.elapsedSeconds,
questionCount: this.state.questions.length
});
}
} catch (error) {
console.warn('Quiz durumu kaydedilemedi:', error);
}
},

startTimer() {
if (this.state.timerInterval) clearInterval(this.state.timerInterval);

```
this.state.timerInterval = setInterval(() => {
  this.state.elapsedSeconds++;
  this.updateTimerDisplay();
  if (this.state.elapsedSeconds % 10 === 0) this.saveState();
}, 1000);
```

},

stopTimer() {
if (this.state.timerInterval) {
clearInterval(this.state.timerInterval);
this.state.timerInterval = null;
console.log('⏹️ Timer durduruldu');
}
},

updateTimerDisplay() {
const timerEl = document.getElementById('quizTimer');
if (timerEl) timerEl.textContent = Utils.formatTime(this.state.elapsedSeconds);
},

displayQuestion() {
try {
const question = this.state.questions[this.state.currentIndex];
if (!question) throw new Error('Soru bulunamadı');

```
  const currentQuestionEl = document.getElementById('currentQuestion');
  const totalQuestionsEl = document.getElementById('totalQuestionsQuiz');

  if (currentQuestionEl) currentQuestionEl.textContent = this.state.currentIndex + 1;
  if (totalQuestionsEl) totalQuestionsEl.textContent = this.state.questions.length;

  const progress = ((this.state.currentIndex + 1) / this.state.questions.length) * 100;
  const progressFill = document.getElementById('progressFill');

  if (progressFill) {
    progressFill.style.width = progress + '%';
    const progressBar = progressFill.parentElement;
    if (progressBar) progressBar.setAttribute('aria-valuenow', Math.round(progress));
  }

  const questionTextEl = document.getElementById('questionText');
  if (questionTextEl) questionTextEl.textContent = question.q;

  this.displayOptions(question);
  this.updateButtons();
} catch (error) {
  console.error('Soru gösterme hatası:', error);
  Utils.showToast('Soru gösterilemedi', 'error');
}
```

},

displayOptions(question) {
const optionsList = document.getElementById('optionsList');
if (!optionsList) return;

```
optionsList.innerHTML = '';

if (!question || !Array.isArray(question.o)) {
  Utils.showToast('Soru seçenekleri hatalı', 'error');
  return;
}

const letters = ['A', 'B', 'C', 'D', 'E'];
const correctIndex = this.getCorrectAnswerIndex(question);

question.o.forEach((option, index) => {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'option-item';
  optionDiv.setAttribute('role', 'radio');
  optionDiv.setAttribute('aria-checked', 'false');
  optionDiv.setAttribute('tabindex', '0');

  const isSelected = this.state.answers[this.state.currentIndex] === index;

  if (isSelected) {
    optionDiv.classList.add('selected');
    optionDiv.setAttribute('aria-checked', 'true');
  }

  if (this.state.isReviewing) {
    optionDiv.classList.add('disabled');

    const isCorrect = index === correctIndex;

    if (isCorrect) optionDiv.classList.add('correct');
    if (isSelected && !isCorrect) optionDiv.classList.add('incorrect');
  }

  optionDiv.innerHTML = `
    <span class="option-letter">${letters[index] || ''}</span>
    <span>${Utils.sanitizeHTML(option)}</span>
  `;

  if (!this.state.isReviewing) {
    optionDiv.addEventListener('click', () => this.selectOption(index));
    optionDiv.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.selectOption(index);
      }
    });
  }

  optionsList.appendChild(optionDiv);
});

if (this.state.isReviewing && question.explanation) {
  const explanationDiv = document.createElement('div');
  explanationDiv.className = 'question-explanation';
  explanationDiv.innerHTML = `
    <div class="explanation-header">
      <span class="explanation-icon">💡</span>
      <strong>${window.t ? t('quiz.explanation', 'Açıklama') : 'Açıklama'}:</strong>
    </div>
    <p>${Utils.sanitizeHTML(question.explanation)}</p>
  `;
  optionsList.appendChild(explanationDiv);
}
```

},

selectOption(index) {
if (this.state.isReviewing) return;

```
try {
  const question = this.state.questions[this.state.currentIndex];
  const correctIndex = this.getCorrectAnswerIndex(question);
  const isCorrect = index === correctIndex;

  this.state.answers[this.state.currentIndex] = index;

  document.querySelectorAll('.option-item').forEach((item, idx) => {
    item.classList.add('disabled');
    item.style.pointerEvents = 'none';

    if (idx === correctIndex) item.classList.add('correct');
    if (idx === index && !isCorrect) item.classList.add('incorrect');

    if (idx === index) {
      item.classList.add('selected');
      item.setAttribute('aria-checked', 'true');
    } else {
      item.classList.remove('selected');
      item.setAttribute('aria-checked', 'false');
    }
  });

  this.showExplanation(question, isCorrect);
  this.saveState();
} catch (error) {
  console.error('Seçenek seçme hatası:', error);
}
```

},

showExplanation(question, isCorrect) {
const oldExplanation = document.querySelector('.question-explanation');
if (oldExplanation) oldExplanation.remove();

```
if (!question.explanation) return;

const optionsList = document.getElementById('optionsList');
if (!optionsList) return;

const explanationDiv = document.createElement('div');
explanationDiv.className = 'question-explanation';
explanationDiv.style.cssText =
  'margin-top: 20px; padding: 15px; background: var(--bg-tertiary); border-left: 4px solid var(--info); border-radius: 8px; animation: slideIn 0.3s ease-out;';

const statusIcon = isCorrect ? '✅' : '❌';
const statusText = isCorrect
  ? (window.t ? t('quiz.correct', 'Doğru!') : 'Doğru!')
  : (window.t ? t('quiz.wrong', 'Yanlış!') : 'Yanlış!');

const statusColor = isCorrect ? 'var(--success)' : 'var(--danger)';

explanationDiv.innerHTML = `
  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
    <span style="font-size:1.2rem;">${statusIcon}</span>
    <strong style="color:${statusColor}; font-size:1.1rem;">${statusText}</strong>
  </div>
  <div style="display:flex; align-items:flex-start; gap:8px; margin-top:10px;">
    <span style="font-size:1.2rem;">💡</span>
    <div>
      <strong style="color: var(--info);">${window.t ? t('quiz.explanation', 'Açıklama') : 'Açıklama'}:</strong>
      <p style="color: var(--text-secondary); line-height:1.6; margin:5px 0 0;">${Utils.sanitizeHTML(question.explanation)}</p>
    </div>
  </div>
`;

optionsList.appendChild(explanationDiv);
```

},

updateButtons() {
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

```
const isFirstQuestion = this.state.currentIndex === 0;
const isLastQuestion = this.state.currentIndex === this.state.questions.length - 1;

if (prevBtn) {
  prevBtn.disabled = isFirstQuestion;

  if (!isFirstQuestion || this.state.isReviewing) {
    prevBtn.style.display = 'inline-flex';
    prevBtn.style.opacity = isFirstQuestion ? '0.5' : '1';
  } else {
    prevBtn.style.display = 'none';
  }
}

if (nextBtn) {
  if (this.state.isReviewing) {
    nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
    const nextText = window.t ? t('quiz.next', 'Sonraki') : 'Sonraki';
    nextBtn.innerHTML = `${nextText} →`;
  } else {
    nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
  }
}

if (submitBtn) {
  submitBtn.style.display = isLastQuestion && !this.state.isReviewing ? 'inline-flex' : 'none';
}

this.showExitButton();
```

},

nextQuestion() {
if (this.state.currentIndex < this.state.questions.length - 1) {
this.state.currentIndex++;
this.displayQuestion();
this.saveState();
window.scrollTo({ top: 0, behavior: 'smooth' });
}
},

previousQuestion() {
if (this.state.currentIndex > 0) {
this.state.currentIndex--;
this.displayQuestion();
this.saveState();
window.scrollTo({ top: 0, behavior: 'smooth' });
}
},

async finishQuiz() {
try {
const unanswered = this.state.answers.filter(a => a === null).length;

```
  if (unanswered > 0) {
    const confirmMsg = window.t
      ? t('quiz.unansweredConfirm', `${unanswered} soru cevaplanmadı. Testi bitirmek istediğinizden emin misiniz?`)
      : `${unanswered} soru cevaplanmadı. Testi bitirmek istediğinizden emin misiniz?`;

    const confirmed = await Utils.confirm(confirmMsg);
    if (!confirmed) return;
  }

  this.stopTimer();

  const results = this.calculateResults();

  if (window.StorageManager) {
    StorageManager.saveTestResult(results);
    StorageManager.clearQuizState();
  }

  localStorage.removeItem('testify_generated_test');

  this.showResults(results);
} catch (error) {
  console.error('Quiz bitirme hatası:', error);
  Utils.showToast('Test bitirilemedi', 'error');
}
```

},

calculateResults() {
let correct = 0;
let wrong = 0;

```
this.state.questions.forEach((question, index) => {
  const userAnswer = this.state.answers[index];

  if (userAnswer !== null) {
    const correctIndex = this.getCorrectAnswerIndex(question);

    if (userAnswer === correctIndex) correct++;
    else wrong++;
  }
});

const unanswered = this.state.questions.length - (correct + wrong);

const successRate = this.state.questions.length > 0
  ? Math.round((correct / this.state.questions.length) * 100)
  : 0;

return {
  mode: this.state.currentMode,
  totalQuestions: this.state.questions.length,
  correctAnswers: correct,
  wrongAnswers: wrong,
  unanswered,
  successRate,
  time: this.state.elapsedSeconds,
  timestamp: Date.now(),
  testTitle: this.state.testTitle
};
```

},

showResults(results) {
try {
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');

```
  if (!quizPage || !resultsPage) throw new Error('Sonuç sayfası bulunamadı');

  quizPage.classList.remove('active');
  resultsPage.classList.add('active');

  const finalScore = document.getElementById('finalScore');
  const correctAnswers = document.getElementById('correctAnswers');
  const wrongAnswers = document.getElementById('wrongAnswers');
  const successPercent = document.getElementById('successPercent');
  const totalTimeResult = document.getElementById('totalTimeResult');

  if (finalScore) finalScore.textContent = `${results.correctAnswers}/${results.totalQuestions}`;
  if (correctAnswers) correctAnswers.textContent = results.correctAnswers;
  if (wrongAnswers) wrongAnswers.textContent = results.wrongAnswers;
  if (successPercent) successPercent.textContent = results.successRate + '%';
  if (totalTimeResult) totalTimeResult.textContent = Utils.formatTime(results.time);

  const resultsIcon = document.querySelector('.results-icon');

  if (resultsIcon) {
    if (results.successRate >= 90) resultsIcon.textContent = '🏆';
    else if (results.successRate >= 75) resultsIcon.textContent = '🎉';
    else if (results.successRate >= 60) resultsIcon.textContent = '👏';
    else if (results.successRate >= 40) resultsIcon.textContent = '💪';
    else resultsIcon.textContent = '📚';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
} catch (error) {
  console.error('Sonuç gösterme hatası:', error);
  Utils.showToast('Sonuçlar gösterilemedi', 'error');
}
```

},

reviewAnswers() {
try {
this.state.isReviewing = true;
this.state.currentIndex = 0;

```
  const resultsPage = document.getElementById('resultsPage');
  const quizPage = document.getElementById('quizPage');

  if (!resultsPage || !quizPage) throw new Error('Quiz sayfası bulunamadı');

  resultsPage.classList.remove('active');
  quizPage.classList.add('active');

  this.displayQuestion();

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (prevBtn) prevBtn.style.display = 'inline-flex';
  if (nextBtn) nextBtn.style.display = 'inline-flex';
  if (submitBtn) submitBtn.style.display = 'none';

  this.showExitButton();

  const reviewMsg = window.t
    ? t('quiz.reviewMode', 'İnceleme modu - Açıklamaları okuyabilirsiniz')
    : 'İnceleme modu - Açıklamaları okuyabilirsiniz';

  Utils.showToast(reviewMsg, 'info');

  window.scrollTo({ top: 0, behavior: 'smooth' });
} catch (error) {
  console.error('İnceleme modu hatası:', error);
  Utils.showToast('İnceleme modu başlatılamadı', 'error');
}
```

},

newQuiz() {
try {
this.cleanupPreviousQuiz();

```
  const resultsPage = document.getElementById('resultsPage');
  const quizPage = document.getElementById('quizPage');
  const testSelection = document.getElementById('testSelection');

  if (resultsPage) resultsPage.classList.remove('active');
  if (quizPage) quizPage.classList.remove('active');
  if (testSelection) testSelection.classList.add('active');

  this.state = {
    currentMode: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    isReviewing: false,
    testTitle: null,
    testDescription: null,
    eventListenersAttached: this.state.eventListenersAttached
  };

  localStorage.removeItem('testify_generated_test');

  window.scrollTo({ top: 0, behavior: 'smooth' });
} catch (error) {
  console.error('Yeni quiz başlatma hatası:', error);
  Utils.showToast('Yeni test başlatılamadı', 'error');
}
```

},

async exitQuiz() {
if (this.state.isReviewing) {
this.newQuiz();
return;
}

```
const confirmMsg = window.t
  ? t('quiz.exitConfirm', 'Testi bırakmak istediğine emin misin?\n\nİlerleme kaydedilmeyecek!')
  : 'Testi bırakmak istediğine emin misin?\n\nİlerleme kaydedilmeyecek!';

const confirmed = await Utils.confirm(confirmMsg);
if (!confirmed) return;

try {
  const answeredCount = this.state.answers.filter(a => a !== null).length;
  const totalCount = this.state.questions.length;

  this.cleanupPreviousQuiz();

  if (window.StorageManager) StorageManager.clearQuizState();

  const quizPage = document.getElementById('quizPage');
  const resultsPage = document.getElementById('resultsPage');
  const testSelection = document.getElementById('testSelection');

  if (quizPage) quizPage.classList.remove('active');
  if (resultsPage) resultsPage.classList.remove('active');
  if (testSelection) testSelection.classList.add('active');

  this.state = {
    currentMode: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    isReviewing: false,
    testTitle: null,
    testDescription: null,
    eventListenersAttached: this.state.eventListenersAttached
  };

  if (answeredCount > 0) {
    Utils.showToast(`📋 Test bırakıldı (${answeredCount}/${totalCount} soru cevaplanmıştı)`, 'info', 4000);
  } else {
    Utils.showToast('Test iptal edildi', 'info');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
} catch (error) {
  console.error('Quiz çıkış hatası:', error);
  Utils.showToast('Çıkış yapılamadı', 'error');
}
```

},

setupEventListeners() {
if (this.state.eventListenersAttached) {
console.log('⚠️ Event listener'lar zaten ekli');
return;
}

```
console.log('🔧 Quiz event listener\'lar kuruluyor...');

const testOptions = document.querySelector('.test-options');

if (testOptions) {
  const modes = ['practice', 'exam', 'ai', 'custom'];
  const cards = testOptions.querySelectorAll('.test-option-card');

  cards.forEach((card, index) => {
    const mode = modes[index];

    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.startQuiz(mode);
    });

    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.startQuiz(mode);
      }
    });
  });
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const reviewBtn = document.getElementById('reviewBtn');
const newQuizBtn = document.getElementById('newQuizBtn');
const exitQuizBtn = document.getElementById('exitQuizBtn');

if (prevBtn) {
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.previousQuestion();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.nextQuestion();
  });
}

if (submitBtn) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.finishQuiz();
  });
}

if (reviewBtn) {
  reviewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.reviewAnswers();
  });
}

if (newQuizBtn) {
  newQuizBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.newQuiz();
  });
}

if (exitQuizBtn) {
  exitQuizBtn.addEventListener('click', (e) => {
    e.preventDefault();
    this.exitQuiz();
  });
}

this.state.eventListenersAttached = true;
console.log('✅ Quiz event listener\'lar kuruldu');
```

}
};

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', () => {
QuizManager.setupEventListeners();
});
} else {
QuizManager.setupEventListeners();
}

window.addEventListener('beforeunload', () => {
QuizManager.stopTimer();
});

window.QuizManager = QuizManager;
