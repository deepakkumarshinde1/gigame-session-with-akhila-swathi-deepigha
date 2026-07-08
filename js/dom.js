let element = document.querySelector("#h1-id");
let button = document.querySelector("#btn");
let ul = document.querySelector("#list");

let incCount = 0;
button.addEventListener("click", () => {
  // element.innerHTML = "<i>hi</i>";
  incCount += 1;
  element.innerHTML = `<i>${incCount}</i>`;
  element.style.color = "red";
  console.log("click");
});

let numbers = [1, 2, 3, 4, 5, 6, 7];

arrayList = numbers.map((value) => {
  return `<li>${value}</li>`;
});
lis = arrayList.join("");
ul.innerHTML = lis;
