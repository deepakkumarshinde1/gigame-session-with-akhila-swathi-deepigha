console.log("hi");
setTimeout(() => {
  console.log("timeout");
}, 1000); // 1000ms = 1s

console.log("hello");
console.log("deepak");

// function written as parameter in other function call
// called as callback function

// setTimeout

// setInterval
let intervalId = setInterval(() => {
  let date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

let timeOutId = setTimeout(() => {
  clearInterval(intervalId);
  console.log("hey timeout is there");
}, 5 * 1000);

console.log(timeOutId);
console.log(intervalId);
