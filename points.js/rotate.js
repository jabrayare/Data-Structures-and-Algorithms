let arr = [1,2,3,4,5,6,7];
let n = 3;
let rotate = function(nums, k){
  while(k > 0){
    let r = nums.pop();
    nums.unshift(r);
    k--;
  }
  return nums;
}
let rotate2 = function(nums,k){
    k %= nums.length;
    reverseArr(nums,0,nums.length-1);
    reverseArr(nums,0,k-1);
    reverseArr(nums,k,nums.length-1);

  return nums;
}
let reverseArr = function(arr,start,end){
      while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
      return arr;
}
console.log(rotate2(arr,4));
// console.log(reverseArr(arr,0,arr.length-1));