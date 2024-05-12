Array.prototype.MyMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(this[i], i, this);
  }
  return temp;
};


const nums=[1,2,3,4,5,6,7,8,9,10]

const addOne=nums.map((data,i,arr)=>{
    return data+1;
});

console.log(addOne);