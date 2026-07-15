// Collection => satu atau lebih data
// Di js, tipe data isi object bisa berbeda2
const obj = {
  expiredDate: undefined,
  umur: 20,
  isAlive: true,
  printName: function () {},
  hobbies: ["Hiking", "Robbing"],
  assets: null,
  domicile: {
    city: "Jakarta",
    postalCode: 13789,
  },
  nama: "budi",
  1: "satu",
};

// object berisikan elemen-elemen
// elemen => kunci(key) + nilai(value) => pair (berpasangan)
// object ditulis menggunakan kurung kurawal/keriting
// order does not matters

// how to access the value inside the object?
// we use the keys to access their values
// 2 syntaxes
// 1. namaObject.namaKey
console.log(obj.nama);
// 2. namaObject["namaKey"]
console.log(obj["nama"]);
let key = "domicile";
console.log(obj[key]);
console.log(obj[1]);

console.log(obj[key]["postalCode"]);

const a = {
  b: {
    c: [, [, , [, , , "dor"]]],
  },
};
console.log(a.b.c[1][2][3]);
