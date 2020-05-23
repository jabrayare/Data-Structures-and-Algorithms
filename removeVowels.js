// let removeVowels = (str) => {
//   let myVowels = new Map(['a','e','i','o','u']);
//   let vowels = {};
//   for(let v of str){
//     if(!vowels[v]){
//       vowels[v] = 1;;
//     }
//     else{
//       vowels[v]++;
//     }
//   }
//   return vowels;
 
// }
let removeVowels = (str) => {
  let vow = "aeiou";
  let vowels = new Set();
  let result = "";
  vowels.add('a')
  vowels.add('e')
  vowels.add('i')
  vowels.add('o')
  vowels.add('u')
  for(let ch of str){
    if(!vowels.has(ch)){
      result += ch;
    }
  }
  return result;
}
let str = "Somalia";
console.log(removeVowels(str));