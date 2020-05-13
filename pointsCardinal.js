let arr = [[1,2],[2,3],[3,4],[4,5],[5,6]];
let j = [[1,2], [2,3], [3,4], [4,5],[9,0]]
let slope = arr[1][1] - arr[0][1] / arr[1][0] -arr[0][0];
console.log(slope);
let index = 1;
let points = function(points){
  let slope = arr[1][1] - arr[0][1] / arr[1][0] -arr[0][0];
  for(let i = 2; i < points.length; i++){

    if((points[index][1] - points[i][1])/(points[index][0] - points[i][0]) === slope){
      return true;
    }
    else{
      return false;
    }
    index++;
  }
  
 
}

console.log(points(j));