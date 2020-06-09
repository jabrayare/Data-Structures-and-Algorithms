/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isPrime = new Array(n);
  for (let i = 2; i < n; i++) {
     isPrime[i] = true;
  }
  // Loop's ending condition is i * i < n instead of i < sqrt(n)
  // to avoid repeatedly calling an expensive function sqrt().
  for (let i = 2; i < Math.sqrt(n); i++) {
     if (!isPrime[i]) continue;
     for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
     }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
     if (isPrime[i]) count++;
     console.log(i);
  }
  return count;

};
countPrimes(10);