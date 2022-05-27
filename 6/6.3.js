class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Dog extends Animal {
    constructor(name){
        super();
        this.name = name;
    }
    static greeting = "Hello";
    
}

class Cat extends Animal {
    constructor(name){
        super();
        this.name = name;
    }
    static greeting = "Hello";
}

let cat1 = new Cat("Oliver").sayHello();

let dog1 = new Dog("Naya").sayHello();