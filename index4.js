// Question 4:

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

// function printFibonacciWithInterval() {
//     let a = 0;
//     let b = 1;

//     console.log(a);

//     const intervalId = setInterval(function () {
//       const next = a + b;
//       console.log(next);
//       a = b;
//       b = next;
//     }, 1000);
//   }

//   printFibonacciWithInterval();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing.

// function printFibonacciTimeouts() {
//   let a = 0;
//   let b = 1;

//   console.log(a);

//   function calculateNext() {
//     const next = a + b;
//     console.log(next);
//     a = b;
//     b = next;

//     setTimeout(calculateNext, 1000);
//   }
//   setTimeout(calculateNext, 1000);
// }

// printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

function printFibonacciWithInterval(limit) {
  let a = 0;
  let b = 1;
  let count = 0;

  console.log(a);
  count++;

  const intervalId = setInterval(function () {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++;

    if (count >= limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printFibonacciWithInterval(15);
