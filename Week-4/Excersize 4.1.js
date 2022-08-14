function getNumber(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!(num % 5 == 0)) {
        console.log("promise has been resolved");
        resolve();
      } else {
        console.log("promise has not been resolved");
        reject("not fulfilled");
      }
    }, 2000);
  });
}

let rnum = Math.random();
console.log(rnum);
getNumber(rnum)
  .then(function () {
    console.log("resolving");
  })
  .catch(function () {
    console.log("rejected");
  });
