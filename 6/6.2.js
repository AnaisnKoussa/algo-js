class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return `Hello, ${this.firstname} ${this.lastname}!`;
    }
}

let person1 = new Person("Anaïs", "Koussa").sayHello();