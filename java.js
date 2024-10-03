const user = {
  set firstName(value) {
    /^[a-zA-Z-]+$/.test(value)
      ? (this._firstName = value)
      : console.error("Ім'я невірне");
  },
  set lastName(value) {
    /^[a-zA-Z-]+$/.test(value)
      ? (this._lastName = value)
      : console.error("Прізвище невірне");
  },
  set phone(value) {
    /^\+380\d{9}$/.test(value)
      ? (this._phone = value)
      : console.error("Телефон невірний");
  },
  set email(value) {
    /^[\w.-]+@gmail\.com$/.test(value)
      ? (this._email = value)
      : console.error("Пошта невірна");
  },
};

user.firstName = "igor";
user.lastName = "zzz";
user.phone = "+380123456789";
user.email = "igor.zzz@gmail.com";

console.log(user);
