// In JavaScript, a prototype is an
// internal blueprint object that allows objects
// to inherit properties and methods from one
// another

let text = "hello";
console.log(text.length);

// prototype, oop, design-pattern
function Shape() {}

Shape.prototype.draw = function () {
  console.log("draw");
};

function Circle() {}

// inheritance
Circle.prototype = Object.create(Shape.prototype);

circle = new Circle();
circle.draw();

String.prototype.getMoreData = function () {
  let text = this.toString();
  return {
    len: text.length,
    uc: text.toUpperCase(),
  };
};

let name = "deepak";
console.log(name.getMoreData());

Number.prototype.square = function () {
  return this * this;
};
let text = 12;
console.log(text.length); // 6
console.log(text.toUpperCase()); // TREU

let more = text.getMoreData();
console.log(more.len);
console.log(more.uc);
