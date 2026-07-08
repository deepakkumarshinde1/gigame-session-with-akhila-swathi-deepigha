// promises
// So promises are the special functions which are actually used to handle asynchronous functionality of your code.
// Every promise function is asynchronous in nature.

// So promises has three phases.
// pending => run
// Fulfilled => success
// Rejected => fails

// run promise function
// funName().then(cb).catch(cb);

url = "https://jsonplaceholder.typicode.com/users";

async function div(a, b) {
  if (b == 0) {
    return Promise.reject("Div 1 Error Cant divide by zero    ");
  }
  return a / b; // resolved
}

async function div2(a, b) {
  if (b == 0) {
    return Promise.reject("Div2 Error Cant divide by zero    ");
  }
  return a / b; // resolved
}

div2(10, 2)
  .then((result) => {
    console.log(result);
    return div(result, 0);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// simple to Multiple promises.
async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData(url);
