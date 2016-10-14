import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class MakingAnagrams {

    public static int numberNeeded(String first, String second) {
        int[] frecuency = new int[26]; // Number of letters in alphabet
        int numbersNeeded = 0;
        // Frecuency in first word
        for(int i = 0; i < first.length(); i++){
            char letter = first.charAt(i);
            frecuency[letter - 'a']++;  // Increment the frecuency for the current letter i.e. frecuency[x]++
        }
        // Frecuency in second word
        for(int i = 0; i < second.length(); i++){
            char letter = second.charAt(i);
            frecuency[letter - 'a']--;  // Decrement the frecuency for the current letter i.e. frecuency[x]--
        }
        for(int i = 0; i < frecuency.length; i++){
            numbersNeeded += Math.abs(frecuency[i]);
        }
        return numbersNeeded;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String a = in.next();
        String b = in.next();
        System.out.println(numberNeeded(a, b));
    }
}
