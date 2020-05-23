let findLucky = function(arr) {
  let map = {};
  for(let num of arr){
      !map[num] ? map[num] = 1 : map[num]++;
  }
  let luckyNum = -1;
  for(let [key,value] of Object.entries(map)){
    if(parseInt(key) === value){
      luckyNum = Math.max(luckyNum,value);
    }
  }
  return luckyNum;
};
let arr = [2,2,3,4];
let arr1 = [1,2,2,3,3,3];
let arr2 = [2,2,2,3,3];
console.log(findLucky(arr1));