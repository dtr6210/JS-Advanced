// Question 10:

// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }
// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

// a) Write a new version of this function using async/await

import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

// b) Test both functions with valid and invalid URLs

// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));

// fetchURLData('https://invalidurl.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

async function fetchAllURLs(urls) {
  try {
    const results = await Promise.all(urls.map((url) => fetchURLData(url)));
    return results;
  } catch (error) {
    console.error(`Error fetching URLs:`, error.message);
  }
}

fetchAllURLs([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {console.error(error)});
