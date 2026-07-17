function asyncAddition(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = false;
      if (isSuccess) {
        let total = num1 + num2;
        resolve(total);
      }
      reject("Terjadi Error");
    }, 200);
  });
}

// const b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isSuccess = false;
//     if (isSuccess) {
//       resolve("B");
//     } else {
//       reject("Terjadi Error");
//     }
//   }, 300);
// });

// b.then((res) => {
//   console.log(res);
// }).catch((e) => {
//   console.log(e);
// });

asyncAddition(1, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

async function doAsyncAddition() {
  try {
    const result = await asyncAddition(1, 3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

doAsyncAddition();
