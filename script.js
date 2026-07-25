const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, number) => total + number , 0)

};

const multiply = function (arr) {
  return arr.reduce((total, number) => total * number, 1)
};

const power = function (a, b) {
  let exponential = 1
  for (i = 1; i <= b; i++) {
    exponential=exponential*a;
  }
  return exponential;
};

const factorial = function (a) {
  let factorial=1;
  for (i=1;i<=a;i++)
    factorial = factorial*i;
  return factorial;

};