let replaceGreatest = function(arr){
  let last = arr.length-1;
  let SecondLast = arr.length-2;
  let result = [-1];
  for(let i = arr.length-1; i > 0; i--){
    if(arr[SecondLast] < arr[i]){
      result.unshift(arr[SecondLast]);
    }
    else{
      arr[SecondLast] = arr[i];
      result.unshift(arr[SecondLast]);
    }

  }
  return arr;

}

console.log(replaceGreatest([17,18,5,4,6,1]))