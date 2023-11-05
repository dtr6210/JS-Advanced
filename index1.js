// Question 1:

// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1

// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)

// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 1, incrementBy = 2) {
  // let currentCount = 0;
  let currentCount = startFrom;
  return function () {
    // currentCount++;
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2

// a) second counter
let counter2 = makeCounter();
counter2();
counter2();




