const age = "30";
// console.log(typeof age)
if (typeof age === "number") {
  if (age >= 17) {
    console.log("buat KTP");
  } else {
    // age < 17
    console.log("belum saatnya");
  }
} else {
  console.log("age is not a number");
}

let name = "";
if (typeof name === "string") {
  if (name) {
    console.log("Hello", name);
  } else {
    console.log("invalid name");
  }
} else {
  console.log("name is not a string");
}

// print nama pengguna
const user = {
  name: "budi",
  city: "jakarta",
};
// const user = ["budi"];
if (user instanceof Object && !Array.isArray(user)) {
  console.log(user.name);
} else {
  console.log("user is not an object");
}

const now = new Date(Date.now());
// const now = "";
if (now instanceof Date) {
  console.log(now.getUTCDate());
} else {
  console.log("now is not a Date Instance");
}

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  PrintCarBrands() {
    console.log(this.brand);
  }
}

const honda = new Car("Honda", "Red");
// const honda = "Honda Red";
if (honda instanceof Car) {
  honda.PrintCarBrands();
} else {
  console.log("honda is not a car instance");
}

const arr = [
  1,
  2,
  3,
  "aku",
  "dan",
  "kamu",
  false,
  false,
  {
    name: "A",
  },
  {
    age: 10,
  },
  ["Hiking", "Robbing"],
  [2, 3, 50],
];
