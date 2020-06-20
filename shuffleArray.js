const shuffle = (nums,n) =>{
  let start = 0;
  let end = nums.length-1;
  let y = n;
  let arr = [];
  while(start < end){
    arr.push(nums[start]);
    arr.push(nums[y]);
    start++;
    end--;
    y++;
  }
  return arr;
}
let num1 = [2,5,1,3,4,7];
let n = 3;
console.log(shuffle(num1,n));