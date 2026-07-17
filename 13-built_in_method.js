// Menambah elemen baru pada array
const fruits = ["Mango", "Banana", "Orange"];
// copy yang lama, lalu tambahkan yg baru
const newFruits = [...fruits, "Watermelon"];
// console.log(newFruits);
// menggunakan index terakhir + 1 = length
// last_index = length - 1
// length = last_index + 1
fruits[fruits.length] = "Watermelon";
// console.log(fruits);
// built-in method push
fruits.push("Mangosteen", "Dragonfruit");
// mutasi/merubah array asli
// output: panjang array yang baru
// input: elemen baru dari array
// console.log(fruits);

// Mengambil seluruh elemen pada array satu-persatu
const numbers = [1, 2, 3, 4, 5];
// for
for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}
// for of
for (let number of numbers) {
  //   console.log(number);
}
// forEach
numbers.forEach((number) => {
  //   console.log(number * number);
});
// console.log(numbers);
// tidak punya output
// input berupa: callback & acuan untuk this (optional)
// tidak mutasi/merubah array asli

// this.multiplier = 20;
// numbers.forEach((number) => {
//   console.log(number * this.multiplier);
// });
// numbers.forEach(
//   function (number) {
//     console.log(number * this.multiplier);
//   },
//   { multiplier: 30 },
// );

// numbers.forEach((num, idx, arr) => {
//   if (arr.length % idx === 0) {
//     arr.push(num);
//   } else {
//     arr.push(num * idx);
//   }
// });
// console.log(numbers);
/**
 * num: 1 2 3 4 5 0 2 6 12 20
 * idx: 0 1 2 3 4
 */

// mencari suatu elemen dari dalam array
const todos = ["Menyapu", "Makan", "Mandi"];
// mencari apakah ada Makan didalam todos
let isFound = false;
const searchWord = "Menyapu";
for (let todo of todos) {
  if (todo === searchWord) {
    isFound = true;
    break;
  }
}
if (isFound) {
  console.log(`${searchWord} ditemukan`);
} else {
  console.log(`${searchWord} tidak ditemukan`);
}
// metode some
const isDitemukan = todos.some((todo) => {
  //   if (todo === searchWord) {return true;}
  //   return false;
  return todo === searchWord ? true : false;
});
// output => boolean true/false
// some tidak merubah/mutasi array asli
if (isDitemukan) {
  console.log(`${searchWord} ditemukan`);
} else {
  console.log(`${searchWord} tidak ditemukan`);
}
