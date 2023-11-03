function mapPromise(prom, cb) {
  return new Promise((resolve, reject) => {
    prom
      .then((result, reject) => {
        if (cb(result)) {
          resolve(cb(result));
        } else {
          reject(new Error(error.message));
        }
      })
      .catch((error) => console.log(error.message));
  });
}

const myPromise = new Promise((resolve, reject) => {
  resolve(2);
});
const timesTwo = (val) => val * 2;
mapPromise(myPromise, timesTwo).then((result) => console.log(result));
