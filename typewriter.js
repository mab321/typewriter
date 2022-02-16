const sentence = "hello there from lighthouse labs";
const printString = function(word) {
  word = word.concat('\n');
let timer = 0;
  for (const char of word) {
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
    }, timer += 50); // <= 1s delay to make it noticeable. Can dial it down later.
    
    
  }
  
   

}

printString(sentence);