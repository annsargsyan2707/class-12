const n = "12";
function promise(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof n === "string") {
        resolve(n.toUpperCase());
      } else {
        reject(new Error(`${n}`));
      }
    }, 500);
  });
}
promise(n)
  .then((res) => {
    console.log(res);
  })

  .catch((err) => {
    console.log("error");
  });
console.log(promise(n));
