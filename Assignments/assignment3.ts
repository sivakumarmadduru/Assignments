// Student names array
let students: string[] = ["Suresh", "Mahesh", "Naresh"];

// Marks array
let marks: number[] = [75, 80, 82];

// New array to store updated marks
let updatedMarks: number[] = [];

// Variable to store total for average calculation
let total: number = 0;

// Add 10 marks to each student using assignment operator
for (let i = 0; i < marks.length; i++) 
    {
    let newMark = marks[i];
    newMark += 10;  // assignment operator

    updatedMarks[i] = newMark;
    total += newMark;
}

// Calculate average
let average = total / updatedMarks.length;

// Output
console.log("Updated Marks:");
for (let i = 0; i < students.length; i++) 
    {
    console.log(students[i] + ": " + updatedMarks[i]);
}

//console.log("Average Marks: " + average.toFixed(1));


console.log("Average Marks: " +average);
