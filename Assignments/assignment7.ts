let sentence: string = "Java programming is fun and challenging";

let words: string[] = sentence.split(" ");

console.log("Total words:", words.length);

let reversed: string = "";
for (let i = words.length - 1; i >= 0; i--) {
    reversed = reversed + words[i] + " ";
}
console.log("Reversed sentence:", reversed);

let capitalized: string = "";
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstChar = word.charAt(0).toUpperCase();
    let rest = word.substring(1);
    capitalized = capitalized + firstChar + rest + " ";
}

console.log("Capitalized sentence:", capitalized);