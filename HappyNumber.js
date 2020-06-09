let isHappy = function(n) {
  let set = new Set();
  while(n != 1 && set.has(n)){
    set.add(n);
    n = helper(n); 
  } 
  return n===1;
};

let helper = function(n){
  let sum = 0;
  while(n > 0){
      let digit = n % 10;
      sum += Math.pow(digit,2);
      n = parseInt(n/10);
  }
  return sum;
}
console.log(isHappy(27));