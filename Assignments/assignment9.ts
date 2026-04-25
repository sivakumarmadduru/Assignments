let rows: number = 5;

for (let i = 1; i <= rows; i++) {
    let line: string = "";

    // Add spaces first
    for (let j = 1; j <= rows - i; j++) {
        line = line + " ";
    }

    // Add stars
    for (let k = 1; k <= i; k++) {
        line = line + "*";
    }

    console.log(line);
}