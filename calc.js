module.exports = class calc {
  constructor(firstArg = 0, SecArg = 0) {
    this.firstArg = parseInt(firstArg, 10);
    this.SecArg = parseInt(SecArg, 10);
  }

  sum() {
    return this.firstArg + this.SecArg;
  }

  subtract() {
    return this.firstArg - this.SecArg;
  }

  multiply() {
    return this.firstArg * this.SecArg;
  }

  divide() {
    return this.firstArg / this.SecArg;
  }

};