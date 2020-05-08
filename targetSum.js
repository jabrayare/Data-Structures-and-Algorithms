let targetSum = function(num,target){
  map = {};
  for(let x of num){
    if(map[x]){
      return [map[x],x];
    }
    else{
      map[target - x] = x;
    }
  }
}
let arr =[5, 2, 3, 7];
let target = 7;
console.log(targetSum(arr,target));