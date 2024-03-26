class Immigrant {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Immigrant {
  constructor(name, surname, age, nationality) {
    super(name, surname, age);
    this.nationality = nationality;
  }
}

class Employee extends Immigrant {
  constructor(name, surname, age, position) {
    super(name, surname, age);
    this.position = position;
  }
}

const resident1 = new Student("Dilshodbek", "Makhmudov", 25, "Uzbekistan");
const immigrant1 = new Immigrant("Ahad", "Makhmudov", 24);
const employee1 = new Employee("Makhsad", "Juraev", 25, "Front End Developer");
console.log(resident1.fullName());
console.log(resident1);
console.log(employee1);
