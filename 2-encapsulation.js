class Employee {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    const _income = income; //encapsulate -- making it unmutable

    this.isWorking = function () {
      console.log(this.name + " is working now!");
    };
    this.isAbsent = function () {
      console.log(this.name + " is absent.");
    };

    this.getFinalIncome = function () {
      //encapsulated within the getFinalIncome() -- commission & bonus multiplier property was hidden away and not accessible nor changeable from the outside
      let commission = 2000;
      let bonusMultiplier = 2;
      let finalSalary = (income + commission) * bonusMultiplier;

      return console.log(this.name + "'s final income is " + finalSalary);
    };
  }
}

let simon = new Employee("simon", 45, 12000);

simon.getFinalIncome();

simon.commission = 5000; //changed but doesnt effect getFinalIncome() result
console.log(simon);
simon.getFinalIncome();
