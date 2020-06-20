const studentScores = (scores) =>{
  let gradesMap = new Map();
  scores = scores.sort(a,b) => {
    if(a[0] === b[0]){
      return b[1] - a[1];
    }
    else{
      return a[0] - b[0];
    }
  }
  for (let val in scores){
    if(gradesMap[scores[val]])
  }
}