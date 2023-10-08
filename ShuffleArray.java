import java.util.Random;

public class ShuffleArray {
    public static void shuffleArray(int[] arr) {
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            // Generate a random index between 0 and i 
            int j = rand.nextInt(i + 1);

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

        shuffleArray(arr);

        // Print the new shuffled array
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

}
