let sellStock = function(prices){
  let min = prices[0];
  maxProfit = 0;
  for(let i = 0; i < prices.length; i++){
      if(prices[i] < min){
        min = prices[i];
      }
      else if(maxProfit < (prices[i] - min)){
        maxProfit = prices[i] - min;
      }
  }
  return maxProfit;
}
let stock = [7,1,5,3,6,4];
console.log(sellStock(stock));