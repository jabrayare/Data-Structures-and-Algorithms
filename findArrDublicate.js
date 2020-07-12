const ArrDublicate = (arr1, arr2) => {
  /** First way. Only works when arr1 > arr2 */
  // let i = 0;
  // let j = 0;
  // let arr = [];
  // while(i < arr1.length){
  //   if(arr1[i] === arr2[j]){
  //     arr.push(arr1[i]);
  //     j++;
  //   }
  //   i++;

  // }
  let arr = [];
  let map = new Map();
  for (let num of arr1) {
    map.set(num, 1);
  }
  for (let num of arr2) {
    if (map.has(num)) {
      arr.push(num);
    }
  }
  return arr;
};

nums2 = [2, 4, 6, 8];
nums1 = [1, 2, 3, 4, 6];
console.log(ArrDublicate(nums1, nums2));
