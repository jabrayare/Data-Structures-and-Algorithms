let moveZeroes = function(s){
  let index = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] != 0){
      let temp = s[index];
      s[index] = s[i];
      s[i] = temp;
      index++;
    }
    
  }
  return s;

}

let arr = [0,1,0,3,12]
console.log(moveZeroes(arr));