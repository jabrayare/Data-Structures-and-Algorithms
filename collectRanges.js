let collectRanges = function(num){
  let begin = 0;
  let result = []
  for(let i = 0; i < num.length; i++){
      if(num[i+1] - num[i] === 1){
        continue;
      }
      if(begin === i){
        result.push(num[i].toString());
      }
      else{
        result.push(num[begin]+"->"+num[i]) ; 
      }
      begin = i +1;
  }
  return result;
}

console.log(collectRanges([0,1,2,4,5,6,7,9]))