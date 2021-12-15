//3. inheritance

class Employee {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    const _income = income;

    this.setName = function (name) {
      this.name = name;
    };

    this.isWorking = function () {
      console.log(this.name + " is working now!");
    };
    this.isAbsent = function () {
      console.log(this.name + " is absent.");
    };

    this.getFinalIncome = function () {
      let commission = 2000;
      let bonusMultiplier = 2;
      let finalSalary = (income + commission) * bonusMultiplier;

      return console.log(this.name + "'s final income is " + finalSalary);
    };
  }
}

//3. inheritance >>> child inherit parent's methods and properties

class Team extends Employee {
  assignProject(projectName) {
    console.log(this.name + " is assigned to " + projectName);
  }
}

let Jason = new Team();

Jason.setName("Jason");
//3. inheritance >>> child able to access parent's methods

Jason.isWorking();

Jason.assignProject("ecommerce project");
