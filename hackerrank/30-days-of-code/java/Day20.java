import java.io.*;
import java.util.*;

public class Day20 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ncases = sc.nextInt();
        int[] numbers = new int[ncases];

        for (int i = 0; i < ncases; i++) {
            numbers[i] = sc.nextInt();
        }

        // Implementation of Bubble Sort
        bubbleSort(numbers);
    }

    public static void bubbleSort(int[] numbers) {
        // Track number of elements swapped during a single array traversal
        int numberOfSwaps = 0;

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers.length - 1; j++) {
                // Swap adjacent elements if they are in decreasing order
                if (numbers[j] > numbers[j + 1]) {
                    int tmp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = tmp;
                    numberOfSwaps++;
                }
            }

            // If no elements were swapped during a traversal, array is sorted
            if (numberOfSwaps == 0) {
                break;
            }
        }

        System.out.println("Array is sorted in " + numberOfSwaps + " swaps.");
        System.out.println("First Element: " + numbers[0]);
        System.out.println("Last Element: " + numbers[numbers.length - 1]);
    }
}
