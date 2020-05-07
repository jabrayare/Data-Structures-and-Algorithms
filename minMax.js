let minMax = function(arr){
        let min = arr[0];
        let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
          min = arr[i];
        }
        else{
          max = arr[i];
        }
    }
      let array = [min,max];
        return array;
      }


console.log(minMax([1,3,4,5,9]))