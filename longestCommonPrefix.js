var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = "";
  if(strs === null || strs.length === 0){
      return longestCommonPrefix;
  }
  let index = 0;
  let prefix = strs[0];
  for(let ch of prefix){
    for(let i = 1; i < strs.length; i++){
       if(index >= strs[i] || ch != strs[i].charAt(index)){
           return longestCommonPrefix;
       }
    }
    longestCommonPrefix += ch;
    index++;
  }
  return longestCommonPrefix;


};
let arr = ["flower","flow","flight"];
console.log(longestCommonPrefix(arr));