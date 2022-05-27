class Person {
    constructor(firstname,lastname) {
        this.firstname = firstname ;
        this.lastname = lastname;
    }
    
    get name() {
        return `${this.firstname} ${this.lastname}`;
    }

    set name(value) {
      [this.firstname, this.lastname] = value.split(" ");
      //[this.firstname, this.lastname] = value;
    }
}

let person1 = new Person("Anaïs","Koussa");
console.log(person1.name);
person1.name = "George Lambert";
//person1.name = ["George", "Lambert"];
console.log(person1.name);
