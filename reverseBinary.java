public class reverseBinary {
  public static String binary(int n){
    String binary = "";
    while(n!=0){
      int rem = n%2;
      binary += rem;
      n /=2;
    }
    return binary;
  }
  public static void main(String[] args){
    String binary = binary(8);
    System.out.println(binary);
  }
}
/**
 * You gotta continue tomorrow Insha Allah.
 */