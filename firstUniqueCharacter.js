let firstUniqueChar = function(s){
  map = {};
  for(let char of s){
    if(!map[char]){
      map[char] = 1;
    }
    else{
      map[char]++;
    }
  }
  console.log(map);
  for(let i = 0; i < s.length; i++){
    if(map[s[i]] === 1){
      return i;
    }
  }
  return -1;
};
console.log(firstUniqueChar("farmoojo"))