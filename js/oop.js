class Staff {
  constructor(_name, _age, _designation) {
    this.name = _name;
    this.age = _age;
    this.designation = _designation;
  }

  printData() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.designation);
  }
}

staff = new Staff("deepak", 25, "Teacher");
console.log(staff);

// ES6

class Maths {
  static PI = 3.14;
  static add() {}

  static sub() {}

  static areaOfCircle(r) {
    print(this.PI * r * r);
  }
}

Maths.add(10, 20);

class Human {
  #age;

  constructor(age, name) {
    this.#age = age;
    this.name = name;
  }

  get age() {
    return this.#age;
  }

  printData() {
    console.log(this.name);
    console.log(this.age);
  }

  //   set age(value) {
  //     this.#age = value;
  //   }
}

// const human = new Human(20);
// human.age = 300;
// console.log(human.age);

// inheritance

class Student extends Human {
  rollNo = 30;
  constructor(name, age, rollNo) {
    super(age, name);
    this.rollNo = rollNo;
  }

  printData() {
    super.printData();
    console.log(this.rollNo);
  }
}

const student = new Student("Sumit", 37, 12);
console.log(student.name);
console.log(student.age);
console.log(student.rollNo);
student.printData();
