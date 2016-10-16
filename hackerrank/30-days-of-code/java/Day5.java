public class Day5 {

    public static void main(String[] args) {
        // Into this method you can find the solution
        solution();
    }

    public static void solution() {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        for(int i=1; i <= 10; i++){
            System.out.println(n + " x " + i + " = " + (i * n));
        }
    }
}
