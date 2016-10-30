public class Day19 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();

        AdvancedArithmetic myCalculator = new Calculator();
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName());
        System.out.println(sum);
    }
}

interface AdvancedArithmetic {

    int divisorSum(int n);
}

//Write your code here
class Calculator implements AdvancedArithmetic {

    public int divisorSum(int n) {
        int sum = 0;
        int num = n;

        while (n > 0) {
            if (num % n == 0) {
                sum += n;
            }
            n--;
        }

        return sum;
    }
}
