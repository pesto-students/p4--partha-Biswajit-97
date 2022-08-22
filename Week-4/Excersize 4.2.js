var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

var Teacher = function () {};

Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
};

const him = new Teacher();

him.initialize("Biswajit", 25);
him.teach("JavaScript");