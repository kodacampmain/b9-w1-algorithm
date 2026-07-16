// method => fungsi yg merupakan value dari object
// 1. getter
// 2. setter
// keyword this
const motorcycle = {
  brand: "Suzuki",
  model: "Shogun",
  productionYear: 2022,
  basePrice: 28_000_000, // 28 x 10^6
  printMotorcycleName() {
    return `${this.brand} ${this.model}`;
  },
  getTodayPrice: function () {
    // asumsikan setiap tahun ada penurunan harga 0.5%
    let totalPrice = this.basePrice;
    const gapYear = new Date(Date.now()).getFullYear() - this.productionYear;
    for (let i = 1; i <= gapYear; i++) {
      totalPrice *= 99.5e-2;
    }
    return totalPrice;
  },
  changeBasePrice: function (newPrice) {
    this.basePrice = newPrice;
  },
  // getProductionYear: () => {
  //   this.
  // }
};
// console.log(motorcycle.printMotorcycleName());
// console.log(motorcycle.getTodayPrice());
motorcycle.changeBasePrice(26_000_000);
// console.log(motorcycle.getTodayPrice());

class Motorcycle {
  #brand;
  #model;
  #productionYear;
  #basePrice;
  constructor(brand, model, productionYear, basePrice) {
    this.#brand = brand;
    this.#model = model;
    this.#productionYear = productionYear;
    this.#basePrice = basePrice;
  }
  printMotorcycleName() {
    return `${this.#brand} ${this.#model}`;
  }
  changeBasePrice(newPrice) {
    if (typeof newPrice !== "number") {
      console.log("newPrice harus berbentuk number");
      return;
    }
    if (newPrice <= 0) {
      console.log("newPrice harus lebih besar dari 0");
      return;
    }
    this.#basePrice = newPrice;
  }
}

const myMotor = new Motorcycle("Suzuki", "Satria FU", 2022, 28e6);
// console.log(myMotor.printMotorcycleName());

// callback
// fungsi yg merupakan input/param dari fungsi lain
// untuk mengambil seluruh elemen array yg di input
function getAllElement(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Input harus berupa Array");
    return;
  }
  if (typeof callback !== "function") {
    console.log("callback harus berupa Function");
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    // ????????? mau diapakan?
    // aksi bisa berupa apapun
    callback(i, el);
  }
}

function sayHello(_, name) {
  console.log(`Hello ${name}`);
}
getAllElement(["Andi", "Banu", "Citra"], sayHello);
getAllElement([1, 2, 3, 4], (i, num) => {
  console.log(`Elemen ke-${i + 1} ${num * num}`);
});

function master(callback) {
  let f, g, h;
  callback(f, g, h);
}

// 1. callback hanya membutuhkan f dan g
master((a, b) => {});
// 2. callback hanya membutuhkan f dan h
master((a, _, c) => {});
// 3. callback hanya membutuhkan g dan h
master((_, b, c) => {});
