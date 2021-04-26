// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
class ModelExemple {
    constructor(name) {
        this.name = name;
    }
    get nameUppercase() {
        return this.name.toUpperCase();
    }

    set name(value) {
        this.name = value;
    }
}