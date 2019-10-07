'use strict';

const uuid = require('uuid')

class Names {
  constructor(name, score){
    this.name = name;
    this.score = score;
    this.id = uuid;
  }
}

module.exports = Names;