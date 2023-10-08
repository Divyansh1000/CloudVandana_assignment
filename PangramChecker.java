import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        
        boolean isPangram = isPangram(input.toLowerCase()); // Convert to lowercase to handle case-insensitivity
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
    
    public static boolean isPangram(String input) {
        HashSet<Character> letters = new HashSet<>();
        
        for (char c : input.toCharArray()) {
            // Check if it's a letter (a to z) and add it to the HashSet
            if (c >= 'a' && c <= 'z') {
                letters.add(c);
            }
        }
        
        return letters.size() == 26;
    }
}
