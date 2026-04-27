let sentence: string = "Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";

let word: string = "Java";
let count: number = 0;
let index: number = 0;

while ((index = sentence.indexOf(word, index)) !== -1) 
    {
    console.log("Found at index:", index);
    count++;
    index = index + word.length; // move forward
}

console.log("Total occurrences:", count);