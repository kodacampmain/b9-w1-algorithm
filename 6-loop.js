// for
/**
 * for(inisialisasi iterator; kondisi perulangan; perubahan iterator){
 *  aksi yang diulang2
 * }
 */

// print 90 - 100
console.log("===FOR===")
for (let stf = 99; stf <= 100; stf = stf + 2) {
  console.log(stf);
}

// while
// print 90 - 100
console.log("===WHILE===")
let stw = 99;
while (stw <= 100) {
  console.log(stw);
  stw = stw + 2;
}

// do while
// jalankan dulu baru dicek kondisi perulangannya
// print 90 - 100
console.log("===DOWHILE===")
let stdw = 99;
do {
  console.log(stdw);
  stdw = stdw + 2;
} while (stdw <= 100);
