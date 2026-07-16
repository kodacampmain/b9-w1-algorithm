// value
let a = 1;
let b = a;
b = 2;

console.log(a, b);

// reference
const c = [1, 2];
const d = c;
d[0] = 5;
const e = [...c, 3, 4, ...d];
e[1] = 6;

console.log(c, d, e);

const student = {
  name: "Andi",
  age: 20,
};
// const athlete = student
const updatedStudentData = {
  name: "Banu",
  address: "Jakarta",
};
const athlete = { ...student, sport: "Football", ...updatedStudentData };

console.log(student, "->" ,athlete);

const arr1 = [1, 2];
const arr2 = [...arr1];
console.log(arr1[0] === arr2[0]);
