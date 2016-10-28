public class Day16 {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        try {
            String S = in.next();
            System.out.println(Integer.parseInt(S));
        } catch(NumberFormatException nfe){
            System.out.println("Bad String");
        }
    }
}
