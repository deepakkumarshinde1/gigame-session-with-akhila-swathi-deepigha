// closures

function parent() {
  let text = 0; // lexical scope variable
  function child() {
    text += 1;
    console.log(text);
  }

  return child;
}

let fun = parent();
fun();
fun();
fun();
fun();
fun();
fun();

add(10, 20);
// common fun
function add(a, b) {
  console.log(a + b);
}

// function expression
const sub = function (a, b) {
  return a - b;
};
sub(10, 20);

// arrow function
const multi = (a, b) => a * b;
multi(10, 20);

// IIFE function

(function (a, b) {
  console.log(a / b);
})(10, 20);

((a, b) => {
  console.log(a / b);
})(10, 20);

// scoping
// global
// block scope
// function / local

let a = 10; // global scope

if (true) {
  let a = 20; // block scope
  console.log(a); // 20
}

for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); //3

// 0,1,2
// 3,3,3

console.log(a); // 10

function login() {
  let username = "deepak";
  let password = "1234";

  if (true) {
    let username = "ram";
    console.log(username); // ram
  }

  console.log(username); //deepak
}

function login1() {
  var username = "deepak";

  if (true) {
    var username = "ram";
    var password = "1234";
    console.log(username); // ram
  }

  console.log(username); // ram
  console.log(password); // 1234
}
