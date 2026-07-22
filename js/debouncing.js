// debounce
// deepak => each key press => 6 times
// deepak => after all key press is done => 1 times

inputBox = document.querySelector("#input-box");
inputBox.addEventListener(
  "keyup",
  debounce(100, (event) => {
    console.log("Working", inputBox.value);
  }),
);

function debounce(delay, cb) {
  let timer = null;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(event);
    }, delay);
  };
}

// throttling
window.addEventListener(
  "scroll",
  throttling(1000, (event) => {
    console.log("Working", inputBox.value);
  }),
);

function throttling(delay, cb) {
  let timer = true;
  return function (event) {
    if (timer == true) {
      timer = false;
      setTimeout(() => {
        timer = true;
        cb(event);
      }, delay);
    }
  };
}

// promise.all race allSettled => 15 min
// js design pattern => 20 min
// functional programming => 20 min

// d =
// e =
// e =
// p =
// a =
// k = 6
