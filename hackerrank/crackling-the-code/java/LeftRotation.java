import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class LeftRotation {

     public static void main(String[] args) {
            Scanner in = new Scanner(System.in);
            int n = in.nextInt();
            int k = in.nextInt();
            int a[] = new int[n];
            for(int a_i=0; a_i < n; a_i++){
                a[a_i] = in.nextInt();
            }

            rotateLeft(a, k);
        }

        public static void rotateLeft(int[] numbers, int rotation){
            int[] result = new int[numbers.length];
            int index;

            if (rotation > 0) {
                for (int x = 0; x < numbers.length; x++) {
                    index = (x + rotation) % numbers.length;
                    result[x] = numbers[index];
                }
            }

            for(int x = 0; x < result.length; x++) {
                System.out.print(result[x] + " ");
            }

        }
}
