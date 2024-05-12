Array.prototype.MyReducer = function (callback, initalValue) {
  var accumulator = initalValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const nums = [45, 23, 1, 6, 7];

const sum = nums.reduce((accumulator, cuurentValue, index, arr) => {
  return accumulator + cuurentValue;
}, 0);

console.log(sum);
