// declare david as an object
let david = {
  name: "david",
  age: 25,
  income: 3000,
  isWorking: function () {
    console.log(david.name + " is working now!");
  },
};

console.log(david);
david.isWorking();

// if required to create multiple person with same property, we can use the class with constructor method

class Employee {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;

    this.isWorking = function () {
      console.log(this.name + " is working now!");
    };
    this.isAbsent = function () {
      console.log(this.name + " is absent.");
    };

    // abstraction -- hiding away implementation and internal details and present the user with what's needed

    this.getFinalIncome = function () {
      let commission = 2000;
      let bonusMultiplier = 2;
      let finalSalary = (this.income + commission) * bonusMultiplier;

      return console.log(this.name + "'s final income is " + finalSalary);
    };
  }
}

let mary = new Employee("mary", 23, 15000);
let simon = new Employee("simon", 45, 12000);

console.log(simon); //only show getFinalIncome() without showing implementation details >> abstraction
simon.getFinalIncome();
