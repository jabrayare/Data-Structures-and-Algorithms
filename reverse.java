public class reverse{
      
      public static int reverse(int x) {
        long res = 0;
        while(x != 0){
          int rem = x % 10;
          res = res * 10 + rem;
          x /= 10;

     }
     if(res < Integer.MIN_VALUE || res > Integer.MAX_VALUE){
       return 0;
     }
     else{
       return (int)res;
     }
        
    }
    public static void main(String[] args) {
     int result = reverse(1534236469);
      System.out.println(result);
      System.out.println("Integer Max Value: "+ Integer.MAX_VALUE);
        }
 }