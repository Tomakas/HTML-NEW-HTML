// js/app.js

import { getTopics } from '../data/data.js';
import { Topic, Level, Word } from './models.js';
import { getCurrentUser } from './user.js';

// Globální proměnné
let currentTopic = null;
let currentLevel = null;
let remainingWords = [];
let wordsToTest = [];
let currentWord = null;
let userInput = '';
let letterOptions = [];
let score = 0;
let totalWordsInLevel = 0;

// Pro Learning Mode
let learningCurrentIndex = 0;
let learningWords = [];

// Pro Přehrávání Zvuku
let audioEnabled = true; // Výchozí hodnota

// Aktuální režim ('learning' nebo 'testing')
let currentMode = null;

// Globální proměnná pro aktuálně přehrávaný audio
let currentAudio = null;

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Načtení nastavení zvuku
  loadSettings();

  // Inicializace podle aktuální stránky
  if (path.endsWith('/topic.html')) {
    loadTopics();
  } else if (path.endsWith('/learning.html')) {
    initLearning();
  } else if (path.endsWith('/testing.html')) {
    initTesting();
  } else if (path.endsWith('/levels.html')) {
    loadLevels();
  }

  // Inicializace modal okna pro nastavení, pokud existuje
  initializeSettingsModal();
});

/**
 * Funkce pro inicializaci modal okna pro nastavení
 */
export function initializeSettingsModal() {
  const settingsButton = document.getElementById('settings-button');
  const modal = document.getElementById('settings-modal');
  const closeButton = modal ? modal.querySelector('.close-button') : null;
  const audioToggle = modal ? modal.querySelector('#audio-toggle') : null;

  if (settingsButton && modal && closeButton && audioToggle) {
    // Otevření modalu
    settingsButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Zavření modalu při kliknutí na zavírací tlačítko
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Zavření modalu při kliknutí mimo obsah
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Nastavení checkboxu podle načteného nastavení
    audioToggle.checked = audioEnabled;

    // Změna nastavení přehrávání zvuku
    audioToggle.addEventListener('change', () => {
      toggleAudio(audioToggle.checked);
    });
  }
}

/**
 * Načte nastavení přehrávání zvuku z localStorage
 */
export function loadSettings() {
  const storedAudioEnabled = localStorage.getItem('audioEnabled');
  if (storedAudioEnabled !== null) {
    audioEnabled = storedAudioEnabled === 'true';
  } else {
    audioEnabled = true; // Výchozí hodnota
    localStorage.setItem('audioEnabled', 'true');
  }
}

/**
 * Přepne nastavení přehrávání zvuku a uloží do localStorage
 * @param {boolean} enabled - Stav přehrávání zvuku
 */
export function toggleAudio(enabled) {
  audioEnabled = enabled;
  localStorage.setItem('audioEnabled', enabled);
}

/**
 * Načte a zobrazí seznam témat
 */
export function loadTopics() {
  const topics = getTopics();
  const topicList = document.getElementById('topic-list');
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  // Mapa témat na názvy obrázků
  const imageMap = {
    'Animals': 'animal.png',
    'Family': 'family.png',
    'Food': 'food.png',
    'Hobbies': 'hobby.png',
    'Home': 'home.png',
    'People': 'human.png',
    'Nature': 'nature.png',
    'Numbers': 'numbers.png',
    'Time': 'time.png',
    'Travel': 'travel.png'
  };

  topicList.innerHTML = '';
  topics.forEach(topic => {
    const listItem = document.createElement('li');
    listItem.classList.add('topic-item');

    // Získání názvu obrázku z mapy
    const imageName = imageMap[topic.name] || 'default.png';

    // Vytvoření obsahu seznamu s obrázkem a názvem
    listItem.innerHTML = `
      <img src="img/${imageName}" alt="${topic.name}" class="topic-image">
      <span class="topic-name">${topic.name}</span>
    `;

    // Přidání klikací události na celý seznamový prvek
    listItem.addEventListener('click', () => {
      window.location.href = `/levels.html?mode=${mode}&topic=${encodeURIComponent(topic.name)}`;
    });

    topicList.appendChild(listItem);
  });
}

/**
 * Načte a zobrazí seznam úrovní pro vybrané téma
 */
export function loadLevels() {
  const urlParams = new URLSearchParams(window.location.search);
  const topicName = urlParams.get('topic');
  const mode = urlParams.get('mode');
  const topics = getTopics();
  const topic = topics.find(t => t.name === topicName);
  currentTopic = topic;

  const levelList = document.getElementById('level-list');
  levelList.innerHTML = '';
  topic.levels.forEach(level => {
    const listItem = document.createElement('li');
    listItem.textContent = `Úroveň ${level.levelNumber}`;
    listItem.addEventListener('click', () => {
      if (mode === 'learning') {
        window.location.href = `/learning.html?mode=${mode}&topic=${encodeURIComponent(topic.name)}&level=${level.levelNumber}`;
      } else if (mode === 'testing') {
        window.location.href = `/testing.html?mode=${mode}&topic=${encodeURIComponent(topic.name)}&level=${level.levelNumber}`;
      }
    });
    levelList.appendChild(listItem);
  });
}

/**
 * Inicializuje Learning Mode
 */
export function initLearning() {
  const urlParams = new URLSearchParams(window.location.search);
  const topicName = urlParams.get('topic');
  const levelNumber = parseInt(urlParams.get('level'));
  const topics = getTopics();
  const topic = topics.find(t => t.name === topicName);
  currentTopic = topic;
  const level = topic.levels.find(l => l.levelNumber === levelNumber);
  currentLevel = level;
  learningWords = level.words;
  learningCurrentIndex = 0;
  totalWordsInLevel = learningWords.length;
  currentMode = 'learning'; // Nastavení aktuálního režimu
  updateLearningDisplay();
  updateLearningProgressBar();
  updateLearningButtons();
  
  // Automatické přehrání zvuku pro první slovo
  if (audioEnabled) {
    window.playCurrentWordAudio();
  }
}

/**
 * Aktualizuje zobrazení aktuálního slova v Learning Mode
 */
function updateLearningDisplay() {
  const learningWordElement = document.getElementById('learning-word');
  if (learningWordElement && learningWords[learningCurrentIndex]) {
    const word = learningWords[learningCurrentIndex];
    currentWord = word; // Nastavení currentWord na aktuální slovo

    console.log('Displaying word:', currentWord); // Pro diagnostiku

    learningWordElement.innerHTML = `
      <span class="english-word">${word.english}</span> - 
      <span class="czech-word">${word.czech}</span> (<span class="phonetic">${word.phonetic}</span>)
    `;
  }
}

/**
 * Funkce pro tlačítko "Zpět" v Learning Mode
 */
export function onLearningBack() {
  if (learningCurrentIndex > 0) {
    learningCurrentIndex--;
    updateLearningDisplay();
    updateLearningProgressBar();
    updateLearningButtons();
    playCurrentWordAudio();
  }
}

/**
 * Funkce pro tlačítko "Další" v Learning Mode
 */
export function onLearningNext() {
  if (learningCurrentIndex < learningWords.length - 1) {
    learningCurrentIndex++;
    updateLearningDisplay();
    updateLearningProgressBar();
    updateLearningButtons();
    playCurrentWordAudio();
  }
}

/**
 * Aktualizuje stav tlačítek "Zpět" a "Další" v Learning Mode
 */
function updateLearningButtons() {
  const backButton = document.getElementById('learning-back-button');
  const nextButton = document.getElementById('learning-next-button');

  if (backButton) {
    backButton.disabled = learningCurrentIndex === 0;
  }

  if (nextButton) {
    nextButton.disabled = learningCurrentIndex === learningWords.length - 1;
  }
}

/**
 * Aktualizuje progress bar v Learning Mode
 */
function updateLearningProgressBar() {
  const progressBar = document.getElementById('learning-progress-bar');
  const percentage = totalWordsInLevel > 0 ? ((learningCurrentIndex + 1) / totalWordsInLevel) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
}

/**
 * Inicializuje Testing Mode
 */
export function initTesting() {
  const urlParams = new URLSearchParams(window.location.search);
  const topicName = urlParams.get('topic');
  const levelNumber = parseInt(urlParams.get('level'));
  const topics = getTopics();
  const topic = topics.find(t => t.name === topicName);
  currentTopic = topic;
  const level = topic.levels.find(l => l.levelNumber === levelNumber);
  currentLevel = level;
  remainingWords = [...level.words];
  wordsToTest = [];
  totalWordsInLevel = level.words.length;
  score = 0;
  currentMode = 'testing'; // Nastavení aktuálního režimu
  updateScoreDisplay();
  updateProgressBar();
  loadNewWord();
}

/**
 * Načte a zobrazí nové slovo v Testing Mode
 */
function loadNewWord() {
  if (remainingWords.length === 0) {
    if (wordsToTest.length === 0) {
      showFinalScoreDialog();
      return;
    } else {
      remainingWords.push(...wordsToTest);
      wordsToTest = [];
    }
  }
  currentWord = remainingWords.splice(Math.floor(Math.random() * remainingWords.length), 1)[0];
  userInput = '';
  generateLetterOptions();
  updateDisplay();
}

/**
 * Generuje a zobrazuje písmena pro sestavení odpovědi uživatele
 */
function generateLetterOptions() {
  const uniqueLetters = new Set();

  currentWord.english.toUpperCase().split('').forEach(letter => uniqueLetters.add(letter));

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while (uniqueLetters.size < 12) {
    uniqueLetters.add(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  letterOptions = Array.from(uniqueLetters).sort(() => 0.5 - Math.random());

  const letterGrid = document.getElementById('letter-grid');
  letterGrid.innerHTML = '';
  letterOptions.forEach(letter => {
    const button = document.createElement('button');
    button.classList.add('letter-button');
    button.textContent = letter;
    button.addEventListener('click', () => onLetterTapped(letter));
    letterGrid.appendChild(button);
  });
}

/**
 * Aktualizuje zobrazení aktuálního slova a uživatelského vstupu v Testing Mode
 */
function updateDisplay() {
  const testingWordElement = document.getElementById('testing-word');
  const testingInputElement = document.getElementById('testing-input');
  if (testingWordElement && testingInputElement && currentWord) {
    testingWordElement.textContent = currentWord.czech;
    testingInputElement.value = userInput;
  }
}

/**
 * Přidá písmeno do uživatelského vstupu
 * @param {string} letter - Písmeno, které uživatel klikl
 */
export function onLetterTapped(letter) {
  userInput += letter.toLowerCase();
  updateDisplay();
}

/**
 * Vymaže celý uživatelský vstup
 */
export function onDeleteTapped() {
  userInput = '';
  updateDisplay();
}

/**
 * Potvrzuje odpověď uživatele
 */
export function onConfirmTapped() {
  const isCorrect = userInput === currentWord.english.toLowerCase();
  handleAnswer(isCorrect);
}

/**
 * Označuje, že uživatel nevěděl odpověď
 */
export function onDontKnowTapped() {
  handleAnswer(false);
}

/**
 * Zpracuje odpověď uživatele a aktualizuje skóre
 * @param {boolean} isCorrect - Indikátor, zda je odpověď správná
 */
function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    updateScoreDisplay();
    showDialog('Správně!', '', true);
    setTimeout(() => {
      if (remainingWords.length === 0 && wordsToTest.length === 0) {
        showFinalScoreDialog();
      } else {
        updateProgressBar();
        loadNewWord();
      }
    }, 1000);
  } else {
    score -= 2;
    if (score < 0) {
      score = 0;
    }
    updateScoreDisplay();
    if (!wordsToTest.some(word => word.english === currentWord.english)) {
      wordsToTest.push(currentWord);
    }
    showDialog('Špatně!', `Správná odpověď byla "${currentWord.english}".`, false);
    setTimeout(() => {
      if (remainingWords.length === 0 && wordsToTest.length === 0) {
        showFinalScoreDialog();
      } else {
        updateProgressBar();
        loadNewWord();
      }
    }, 4000);
  }

  // Přehrání zvuku po odpovědi v Testing Mode
  if (currentMode === 'testing' && audioEnabled) {
    const audio = new Audio(`voice/${currentWord.english.toLowerCase()}.mp3`);
    audio.play().catch(error => {
      console.error(`Nelze přehrát zvuk pro slovo: ${currentWord.english}`, error);
    });
  }
}

/**
 * Aktualizuje zobrazení skóre
 */
function updateScoreDisplay() {
  const scoreElement = document.getElementById('testing-score');
  if (scoreElement) {
    scoreElement.textContent = `Skóre: ${score}`;
  }
}

/**
 * Zobrazuje dialogové okno s informacemi o odpovědi
 * @param {string} title - Titulek dialogu
 * @param {string} content - Obsah dialogu
 * @param {boolean} isSuccess - Indikátor, zda je odpověď správná
 */
function showDialog(title, content, isSuccess) {
  const alertContainer = document.getElementById('alert-container');
  alertContainer.innerHTML = '';
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert');

  if (isSuccess) {
    alertDiv.classList.add('alert-success');
    alertDiv.innerHTML = `
      <div class="alert-title">${title}</div>
    `;
  } else {
    alertDiv.classList.add('alert-danger');
    alertDiv.innerHTML = `
      <div class="alert-title">${title}</div>
      <div class="alert-content">${content}</div>
    `;
  }

  alertContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertContainer.removeChild(alertDiv);
    if (remainingWords.length === 0 && wordsToTest.length === 0) {
      showFinalScoreDialog();
    }
  }, isSuccess ? 1000 : 4000);
}

/**
 * Zobrazuje finální dialog s výsledkem testu
 */
function showFinalScoreDialog() {
  const alertContainer = document.getElementById('alert-container');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', 'alert-info', 'final-score-dialog');
  alertDiv.innerHTML = `
    <div class="alert-title">Konec testu!</div>
    <div class="alert-content">Vaše finální skóre je ${score}.</div>
    <button class="alert-button" onclick="goTo('/')">OK</button>
  `;
  alertContainer.appendChild(alertDiv);
}

/**
 * Aktualizuje progress bar v Testing Mode
 */
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const answeredWords = totalWordsInLevel - (remainingWords.length + wordsToTest.length);
  const percentage = totalWordsInLevel > 0 ? (answeredWords / totalWordsInLevel) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
}

/**
 * Funkce pro přehrání aktuálního slova v Learning Mode
 */
export function playCurrentWordAudio() {
  console.log('playCurrentWordAudio called for', currentWord);
  if (currentMode === 'learning' && audioEnabled && currentWord) {
    // Zastavení předchozího audio, pokud existuje
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      console.log('Previous audio paused.');
    }

    currentAudio = new Audio(`voice/${currentWord.english.toLowerCase()}.mp3`);
    currentAudio.preload = 'auto';
    currentAudio.play().then(() => {
      console.log('Audio played successfully.');
    }).catch(error => {
      console.error(`Nelze přehrát zvuk pro slovo: ${currentWord.english}`, error);
    });
  } else {
    console.warn('Audio není povoleno nebo není nastavené aktuální slovo.');
  }
}

// Připojení Learning Mode a Testing Mode funkcí k window objektu
window.onLearningBack = onLearningBack;
window.onLearningNext = onLearningNext;
window.onDeleteTapped = onDeleteTapped;
window.onConfirmTapped = onConfirmTapped;
window.onDontKnowTapped = onDontKnowTapped;
window.playCurrentWordAudio = playCurrentWordAudio; // Přidáno pro Audio tlačítko
