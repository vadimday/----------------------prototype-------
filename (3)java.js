class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    return `ку ${this.name}.`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Приклад використання
const user = new User("mark", 20, "mark@gmail.com");
console.log(user.greet()); //
console.log("Чи повнолітня?", user.isAdult());
