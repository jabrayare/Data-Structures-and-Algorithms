let candies = [2,3,5,1,3]
let extraCandies = 3;
let kidsWithCandies = function(arr,cand){
  let result = [];
  let maxCandies = Math.max(...arr);
  for(let i = 0; i < arr.length; i++){
      if(maxCandies <= (arr[i]+cand)){
        result.push(true);
      }
      else{
      result.push(false);
      }
  }
  return result;
}
console.log(kidsWithCandies(candies,extraCandies));