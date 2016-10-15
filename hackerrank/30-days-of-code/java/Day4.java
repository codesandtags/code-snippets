public class Day4 {

    public static void main(String[] args) {
        // Into this method you can find the solution
        solution();
    }

    public static void solution() {
        //For this exercise the solution is in the Person class
    }
}

class Person {

    private int age;

    public Person(int initialAge) {
        this.setAge(initialAge);
    }

    public void setAge(int age) {
        if (age < 0) {
            this.age = 0;
            System.out.println("Age is not valid, setting age to 0.");
        } else {
            this.age = age;
        }
    }

    public void amIOld() {
        // Write code determining if this person's age is old and print the correct statement:
        if (age < 13) {
            System.out.println("You are young.");
        } else if (age >= 13 && age < 18) {
            System.out.println("You are a teenager.");
        } else {
            System.out.println("You are old.");
        }
    }

    public void yearPasses() {
        // Increment this person's age.
        this.age++;
    }
}
