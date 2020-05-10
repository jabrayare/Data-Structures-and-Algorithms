let string = "A man, a plan, a cana:l Panama";
string2 = "race a car" // false 
string3 = '"0P"';
let isPalindrome = function(str){
  let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase(); 
    let left = 0;
    let right = cleanedStr.length-1;
    while(left < right){
      if(cleanedStr.length ===1){
        return false;
      }
      if(cleanedStr[left] != cleanedStr[right]){
        return false;
      }
      left++;
      right--;
    }
    return true;

}
console.log(isPalindrome(string2));