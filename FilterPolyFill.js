Array.prototype.MyFilter = function (callBack) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};


const nums = [12,56,56,78,65,23,45]

const TestFilter=nums.filter((num)=>{
    return num>40;
})

console.log(TestFilter)