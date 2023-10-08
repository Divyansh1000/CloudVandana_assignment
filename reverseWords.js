function reverseWordsManually(sentence) {
    let reversedSentence = '';
    let wordStart = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ' || i === sentence.length - 1) {
        // Reverse the word and add it to the reversed sentence
        let wordEnd = i === sentence.length - 1 ? i : i - 1;
        let reversedWord = '';
  
        for (let j = wordEnd; j >= wordStart; j--) {
          reversedWord += sentence[j];
        }
  
        reversedSentence += reversedWord;
  
        if (i !== sentence.length - 1) {
          reversedSentence += ' ';
        }
  
        wordStart = i + 1;
      }
    }
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWordsManually(inputSentence);
  console.log(reversedSentence); 
  
  
  
  // Output: "sihT si a ynnus yad"
  