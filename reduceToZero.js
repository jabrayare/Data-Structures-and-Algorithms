const reduceToZero = (num) => {
  let count = 0;
  while (num != 0) {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    count++;
  }
  return count;
};

num = 123;
// 1) 14 / 2 = 7
// 2) 7 - 1 = 6
// 3) 6 / 2 = 3
// 4) 3 - 1 = 2
// 5) 2 / 2 = 1
// 6) 1 - 1 = 0
// Output: 6
console.log(reduceToZero(num));
