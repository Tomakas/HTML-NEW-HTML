// js/models.js

export class Topic {
    constructor(name, levels) {
      this.name = name;
      this.levels = levels;
    }
  }
  
  export class Level {
    constructor(levelNumber, words) {
      this.levelNumber = levelNumber;
      this.words = words;
    }
  }
  
  export class Word {
    constructor(czech, english, phonetic) {
      this.czech = czech;
      this.english = english;
      this.phonetic = phonetic;
    }
  }