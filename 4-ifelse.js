// berantai/beruntun (chaining)
// bersarang (nested)

// syntax if
/**
 * if(condition){
 *  if true
 * } else {
 *  if false
 * }
 * */
// condition menggunakan op logika

const umur = 18;
if (umur >= 17) {
  console.log("buat KTP");
} else {
  // umur < 17
  console.log("belum saatnya");
}

// chaining if => biasa dilakukan ketika lebih dari 1 kondisi
// nilai raport
/**
 * A 80 - 100
 * B 60 - <80
 * C 0  - <60
 */
const score = -90;
if (score <= 100 && score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 0) {
  console.log("C");
} else {
  console.log("invalid score");
}
// bagaimana kalau score lebih dari 100 atau kurang dari 0?
// kondisi menjadi berlapis => nested if
if (score >= 0 && score <= 100) {
  if (score >= 80) {
    console.log("A");
  } else if (score >= 60) {
    console.log("B");
  } else {
    console.log("C");
  }
} else {
  console.log("invalid score");
}

// truthy-falsy
// premis: membuat suatu sapaan yang menggunakan nama yang diinputkan,
// apabila namanya kosong, keluar pesan invalid
let name;
if (name) {
  console.log("Hello", name);
} else {
  console.log("invalid name");
}
