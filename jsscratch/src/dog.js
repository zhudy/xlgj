class Dog{
    constructor(name){
        this.name = name;
    }
    bark(){
        return `Wha Wa, I am ${this.name}`;
    }
}

module.exports = Dog
