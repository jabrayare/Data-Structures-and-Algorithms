let arr1 = [5,7,3,9,4,9,8,3,1]; 
// output = 8 
let arr2 = [9,9,8,8]; 
// output = -1
function largestUnique (arr){
  let map = {};
  for(let num of arr){
    if(!map[num]){
      map[num] = 1;
    }
    else{
      map[num]++;
    }
  }
	let largest = -1; 
	for (let key in map) {
		if (map[key] === 1) {
			if (largest < key) {
				largest = key; 
			}
		}
	}
	return largest; 
}

console.log(largestUnique(arr2));