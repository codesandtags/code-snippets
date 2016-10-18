public class Day6 {

    public static void main(String[] args) {
        // Into this method you can find the solution
        solution();
    }

    public static void solution() {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        int cases = Integer.parseInt(in.nextLine());

        for (int x = 0; x < cases; x++) {
            String word = in.nextLine();
            String odds = "";
            String evens = "";

            for (int i = 0; i < word.length(); i++) {
                if (i % 2 == 0) {
                    evens += word.charAt(i);
                } else {
                    odds += word.charAt(i);
                }
            }

            System.out.println(evens + " " + odds);
        }
    }
}
