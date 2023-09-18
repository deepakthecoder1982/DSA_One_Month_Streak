public class Main {
    public static void main(String[] args) {
        congratulations(true);
    }

    public static void congratulations(boolean isProject) {
        if (isProject) {
            System.out.println("Congratulations on building an awesome project !!");
        } else {
            System.out.println("Let's try again! You are the best, you can do it!");
        }
    }
}