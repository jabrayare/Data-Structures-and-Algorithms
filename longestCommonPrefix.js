var longestCommonPrefix = function(strs) {
  if(strs.length === 0){
      return "";
  }
  let prefix = strs[0];
  for(let i = 1; i < strs.length; i++){
      if(!strs[i].startsWith(prefix)){
          prefix = prefix.substring(0,prefix.length-1);
      }
  }
  return prefix;
};
let arr = ["flower","flow","flight"];
console.log(longestCommonPrefix(arr));