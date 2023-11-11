// Question 7:

// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].

// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.

// a) Define a custom toString method for the Person object that will format and print
// their details

// b) Test your method by creating 2 different people using the below constructor function
// and printing them

// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort



function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // a)  define custom toString
  this.toString = function () {
    return `${this.name}, ${this.age} years old, ${this.gender}`;
  };
}

const person1 = new Person("James Brown", 73, "male");
// b) create 2 people
const person2 = new Person("Stevie Wonder", 73,"male");

console.log("person1: " + person1); //prints person1: [object Object]
console.log("person2: " + person2);


// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.

this.toString = function() {
    return `${this.name}, ${this.age} years old, ${this.gender}, ${this.cohort}`;
};

let student1 = new Student("Billy Madison", 27, "male", "Cohort 1");
let student2 = new Student("Happy Gilmore", 30, "male", "Cohort 10" );

console.log("student1: " + student1); 
console.log("student2: " + student2);