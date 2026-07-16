// function(params/input){implementation}
// function(input1, input2)
// function(input1)
// function()
// function(...input) => variadic function
// return => output

// deklarasi
// function declaration
function sayHello() {
  return "Hello World";
}
// function call/invocation
// invoke
// output dari invocation bisa ditampung di variabel
const out = sayHello();
console.log(out);

// expression
const addition = function (num1, num2) {
  return num1 + num2;
};
// invocation
const total = addition(1, 2);
console.log(total);

// arrow function
const greeting = (name) => {
  return `Hello ${name}`;
};
// implicit return
const greet = (name) => `Hello ${name}`;
const add = (num1, num2) => num1 + num2;
// invocation
const greet = greeting("Given");
console.log(greet);

// variadic func
function totalCost(...costs) {
  let total = 0;
  for (let i = 0; i < costs.length; i++) {
    // asumsikan input nya berupa number-number
    total = total + costs[i];
  }
  return total;
}
// invocation
// const totalBelanja = totalCost(15000, 7000);
console.log(totalCost(15000, 7000));

// IIFE
(function (a, t) {
  const luas = (a * t) / 2;
  console.log(luas);
})(10, 5);

const person = {
  name: "Andi",
  age: 20,
  isMarried: false,
};
function isEligibleForSIM({ age }) {
  // asumsikan input memiliki properti age
  if (age < 17) {
    return false;
  } else {
    return true;
  }
}
console.log(isEligibleForSIM(person));
