function asyncAddition(num1, num2, cb) {
  setTimeout(() => {
    let total = num1 + num2;
    cb(total);
    // return total;
  }, 200);
}

function b() {
  setTimeout(() => {
    console.log("B");
  }, 300);
}

function c(cb) {
  setTimeout(() => {
    console.log("C");
    cb();
  }, 150);
}

function d() {
  console.log("D");
}

asyncAddition(1, 2, printer);
// console.log(hasil);
b();
c(d);
d();

function printer(data) {
  console.log(data);
}

function e(cb) {
  setTimeout(() => {
    console.log("E");
    cb("Hello");
  }, 500);
}

function f(data) {
  setTimeout(() => {
    console.log("F");
    console.log(data);
  }, 100);
}

e(f)