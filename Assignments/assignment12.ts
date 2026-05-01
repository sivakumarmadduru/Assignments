function myPow(x: number, n: number): number {
    // Handle base case
    if (n === 0) return 1;

    // Handle negative powers
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result: number = 1;

    while (n > 0) {
        // If n is odd, multiply result with x
        if (n % 2 === 1) {
            result *= x;
        }

        // Square the base
        x *= x;

        // Divide n by 2
        n = Math.floor(n / 2);
    }

    return result;
}

console.log(myPow(2.0, 10)); // 1024
console.log(myPow(2.1, 3));  // 9.261
console.log(myPow(2.0, -2)); // 0.25