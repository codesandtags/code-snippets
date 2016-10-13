public class Day1{
    public static void main(String[] args) {
        // Into this method you can find the solution
        solution();
    }

    public static void solution(){
        /* Declare second integer, double, and String variables. */
        /* Read and save an integer, double, and String to your variables.*/
        int secondInteger = Integer.parseInt(scan.nextLine());
        double secondDouble = Double.parseDouble(scan.nextLine());
        String secondString = scan.nextLine();

        /* Print the sum of both integer variables on a new line. */
        System.out.println(i + secondInteger);

        /* Print the sum of the double variables on a new line. */
        System.out.println(d + secondDouble);

        /* Concatenate and print the String variables on a new line;
        	the 's' variable above should be printed first. */
        System.out.println(s + secondString);
    }
}