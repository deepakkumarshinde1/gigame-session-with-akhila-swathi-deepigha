let a = 10;
let b = 20;
let result = a + b;
result = 10 + 20;

//  parameters
function fun(a = 0, b = 0, c = true) {
  console.log(a, b, c);
  console.log("i am function");
} // function definition

// run
fun(10, 11, 12); // function call
fun();
fun();

a = 10;
console.log(typeof a); // number
a = "deepak";
console.log(typeof a); // string

// return conclude value
function add(a = 0, b = 0) {
  let result = a + b;
  return result;
}

let num = add(10, 2);
console.log(num);
