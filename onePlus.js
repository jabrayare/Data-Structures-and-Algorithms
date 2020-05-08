let onePlus = function(num){
  for(let i = num.length-1; i >= 0; i--){
    if(num[i] === 9){
      num[i] = 0;
    }
    else{
      num[i]++;
      return num;
    }
  }
  if(num[0] === 0){
    num.unshift(1);
  }
  return num;
}
console.log(onePlus([1,2,9]));