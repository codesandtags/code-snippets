public class Day7 {

    public static void main(String[] args) {
        // Into this method you can find the solution
        solution();
    }

    public static void solution() {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }
        in.close();

        for (int x = arr.length - 1; x >= 0; x--) {
            if (x == 0) {
                System.out.println(arr[x]);
                break;
            }
            System.out.print(arr[x] + " ");
        }
    }
}
