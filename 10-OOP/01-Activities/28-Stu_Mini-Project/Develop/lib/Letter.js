class Letter {
  constructor(char) {
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char
}

    toString() {
        if (this.visible === true) {
        return this.char;
        }
        return "_";
    }

    getSolution() {
        return this.char
    }

    guess(charGuess) {
        if (charGuess.toUppercase() === this.char.toUppercase()) {
            this.visible = true;
            return true;
        }
    }
}

module.exports = Letter;
