public class Day14 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}

class Difference {

    private int[] elements;
    public int maximumDifference;

    // Add your code here
    Difference(int[] elements) {
        this.elements = elements;
    }

    public void computeDifference() {
        // Sort the array in order to get the smallest and largest number
        Arrays.sort(this.elements);
        int difference = Math.abs(this.elements[0] - this.elements[this.elements.length - 1]);
        this.maximumDifference = difference;
    }
}
