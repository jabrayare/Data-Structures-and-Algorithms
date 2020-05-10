let collectRanges = function(num){
  let begin = 0;
  let arr = []
  for(let i = 0; i < num.length; i++){
      if(num[i+1] - num[i] === 1){
        continue;
      }else{
        arr.push(num[]begin+"->"+num[index])
      }
      index++;
  }
  return arr;
}

console.log(collectRanges([0,1,2,4,5,6,7,9]))