function isPyramid(rows: number): void {



    //top Part

    for (let i = 1; i <= rows; i++) {

        let space = " ".repeat(rows - i);

        let numbers = "";

        for (let j = 1; j <= i; j++) {

            numbers += j + " ";





        }

        console.log(space + numbers.trim());



    }

    //Bottom Part

    for (let i = rows - 1; i >= 1; i--) {

        let space = " ".repeat(rows - i + 1);

        let numbers = "";

        for (let j = 1; j <= i; j++) {

            numbers += j + " ";





        }

        console.log(space + numbers.trim());





    }



}



isPyramid(5);