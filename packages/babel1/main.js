const fn = (num) => num + 2;

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(fn(2));
  }, 2000);
});