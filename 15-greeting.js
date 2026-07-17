function pagi(sng, mlm) {
  setTimeout(() => {
    let isError = false;
    if (!isError) {
      console.log("Selamat Pagi");
      sng(mlm);
    } else {
      console.log("Error");
    }
  }, 2000);
}

function siang(mlm) {
  setTimeout(() => {
    let isError = true;
    if (!isError) {
      console.log("Selamat Siang");
      mlm();
    } else {
      console.log("Error");
    }
  }, 1500);
}

function malam() {
  setTimeout(() => {
    let isError = false;
    if (!isError) {
      console.log("Selamat Malam");
    } else {
      console.log("Error");
    }
  }, 1000);
}

// pagi(siang, malam);

const morning = function () {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      let isError = false;
      if (!isError) {
        rs("Selamat Pagi");
      } else {
        rj("Error");
      }
    }, 2000);
  });
};

const noon = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let isError = false;
      if (!isError) {
        res("Selamat Siang");
      } else {
        rej("Error");
      }
    }, 1500);
  });
};

const night = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isError = false;
      if (!isError) {
        resolve("Selamat Malam");
      } else {
        reject("Error");
      }
    }, 1000);
  });
};
// morning.then((res) => console.log(res)).catch((err) => console.log(err));
// noon.then((res) => console.log(res)).catch((err) => console.log(err));
// night.then((res) => console.log(res)).catch((err) => console.log(err));

// morning()
//   .then((res) => {
//     console.log(res);
//     return noon();
//   })
//   .then((res) => {
//     console.log(res);
//     return night();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

(async function () {
  try {
    console.log(await noon());
    console.log(await morning());
    console.log(await night());
  } catch (error) {
    console.log(error);
  }
})();

// greet();
