// Question 5:

// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

// When we are using the car.description through the setTimeout, it is not being called directly so its context is lost.

// If a function relies on context (this) and is passed as a reference instead of being
// called directly, its context is lost.

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
// car.description(); //works

// setTimeout(car.description, 200); //fails

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
// car.description(); //works

// setTimeout(() => {
//   car.description();
// }, 2000);

// b) Change the year for the car by creating a clone of the original and overriding it.

// let clonedCar = Object.create(
//     Object.getPrototypeOf(car),
//     Object.getOwnPropertyDescriptors(car)
// )

// clonedCar.year = 1982;

// clonedCar.description()

// setTimeout(() => {
//     clonedCar.description();
//   }, 4000);


//   c) Does the delayed description() call use the original values or the new values from b)? Why?

// It uses the original values because we made a clone of the original object.


// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function


let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); 

setTimeout(car.description.bind(car), 2000);

let clonedCar2 = Object.create(
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)

clonedCar2.model = "Cayenne";

clonedCar2.description(); 

setTimeout(clonedCar2.description.bind(car), 2000);
  