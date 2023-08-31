// Programing Style Choices in JavaScript

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. Use camelCase for variable and function names
const myVariableName = "Hello";

function doSomething() {
  //...
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2. Use Descriptive Names
const userData = getUserData();

function getUserData() {
  //...
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3. Use a consistent indentation pattern
function processOrder(order) {
  const taxRate = 0.05;

  const subtotal = order.amount;
  const tax = subtotal * taxRate;

  return {
    subtotal: subtotal,
    tax: tax,
  };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
