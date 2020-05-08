/**let isque = function(str){
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++){
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}
*/

let isUnique = function(str){
  let map = {};
  for(let char of str){
    if(!map[char]){
      map[char] = 1;
    }
    else{
      map[char]++;
    }
    if(map[char] > 1){
      return false;
    }
  }
  return true;
}
console.log(isUnique("fahmok"));