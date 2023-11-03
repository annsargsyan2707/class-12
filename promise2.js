function squarePromise(prom) {
  return new Promise((resolve, reject) => {
    prom
      .then((result) => {
        if (!isNaN(+result)) {
          resolve(result ** 2);
        }

        reject(`Cannote convert ${result} to a number`);
      })
      .catch(reject);
  });
}
const prom1 = new Promise((resolve) => resolve(2));
const prom2 = new Promise((resolve) => resolve("2"));
const prom3 = new Promise((reject) => reject(new Error("An error occurred")));
squarePromise(prom1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
squarePromise(prom2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

squarePromise(prom3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
