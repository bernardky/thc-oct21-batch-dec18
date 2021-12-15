//4. polymorphism >>> many forms

class Animal {
  constructor(color, name) {
    this.color = color;
    this.name = name;

    this.makeSound = function () {
      console.log(this.name + " just made a sound!");
    };
  }
}

class Cat extends Animal {
  constructor(color, name, diet) {
    super(color, name);

    this.diet = diet;

    this.makeSound = function () {
      console.log(this.name + " just meowed!");
    }; //methods overriding> same function but doing different things
  }
}

let myCat = new Cat("black", "katniss", "fish");
myCat.makeSound();

class Dog extends Animal {
  constructor(color, name, breed) {
    super(color, name);

    this.breed = breed;
    this.makeSound = function () {
      alert(this.name + " barked!");
    }; //methods overriding> same function but doing different things -- polymorphism
  }
}

let myDog = new Dog("brown", "darren", "golden retriever");

console.log(myDog);

//treated as same object of the base class eventhough their properties are different
let myPets = [myCat, myDog];

myPets.forEach((pet) => pet.makeSound());
