const orchidRGB = [218, 112, 214];

// const red = orchidRGB[0];
// const green = orchidRGB[1];
// const blue = orchidRGB[2];
// desctructuring
// const [] = arr
const [r, , b] = orchidRGB;
// console.log(r, b);

// rest operator (...)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , tiga, ...sisa] = numbers;
// console.log(tiga);
// console.log(sisa);

const biodata = {
  name: "Anjas",
  address: "Bandung",
  age: 22,
  isMarried: false,
};
// destructuring
// const {} = obj
const { age: umur, address, ...sisaData } = biodata;
// const Age = biodata.age;
// const Address = biodata.address;
// console.log(umur);
// console.log(address);
// console.log(sisaData);

const who = {
  am: {
    i: "Koda",
  },
};
// const {i} = who.am
const { am } = who;
const { i } = am;
// const { am: { i } } = who
// console.log(i);
const obj = {
  str: [
    "",
    [
      "",
      "",
      ["", "", "", { koda: [{ tech: { academy: "Koda Tech Academy" } }] }],
    ],
  ],
};

const {
  str: [
    ,
    [
      ,
      ,
      [
        ,
        ,
        ,
        {
          koda: [
            {
              tech: { academy },
            },
          ],
        },
        ,
      ],
    ],
  ],
} = obj;

console.log(academy);
