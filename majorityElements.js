let majorityElements = function(nums){
  map = {};
  let halfNum = Math.floor(nums.length/2);
  for(let numbers of nums){
    if(!map[numbers]){
      map[numbers] = 1;
    }
    else{
      map[numbers]++;
    }
  
    if(map[numbers] > halfNum){
      return numbers;
    }
  }
};

let arr = [2,2,1,1,1,2,2];
console.log(majorityElements(arr));