// const reverseString = (str) =>{
//   let left = 0;
//   let right = str.length-1;
//   console.log(str[right]);
//   while(left < right){
//     let temp = str[left];
//     str[left] = str[right];
//     str[right] = temp;

//     ++left;
//     --right;
//     console.log(str);
//   }
//   return str;
// }
let reverseString = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      ++left;
      --right;
  }
  return s;
};
let str = 'jabra';
console.log(reverseString(str));