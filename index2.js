// Question 2:

// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

// a) What order will the four tests below print in? Why?

// function delayMsg(msg) {
//     console.log(`This message will be printed after a delay: ${msg}`);
//   }
//   setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
//   setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
//   setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
//   delayMsg("#4: Not delayed at all");

// Will print in this order:

// They will print as message #4, 3, 2, 1.  This is because message #4 does not have a setTimeout on it so it runs quicker
// than the others.  Then #3 even though set to 0ms still prints after 4 because it takes a second to process through
// the setTimeout.  Then the others are printing based on their time delay.

// b) Rewrite delayMsg as an arrow function

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

// setTimeout(delayMsg, 11000, "#5: Delayed by 11000ms");

// d) Use clearTimeout to prevent the fifth test from printing at all.

let canceledSetTimeout = setTimeout(delayMsg, 11000, "#5: Delayed by 11000ms");
clearTimeout(canceledSetTimeout);
