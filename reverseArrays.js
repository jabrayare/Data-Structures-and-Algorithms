let arr = [1,4,2,3];
console.log(arr);
let start = 0;
let end = arr.length-1;
while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
//  for(let i = 0; i < arr.length-1; i++){
//    for(let j = 0; j < arr.length-1-i; j++){
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//  }

console.log(arr);