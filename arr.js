let arr = function(s){
  map = {};
  for(let char of s){
    if(!map[char]){
      map[char] = 1;
    }
    else{
      map[char]++;
    }
  }
let arr1 = [5,7,3,9,4,9,8,3,1]
console.log(arr(arr1));