

// Employee Data
let names: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000, 68000, 82000, 90000, 60000];
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let ratings: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];


//Arrays to store
let hike:number[]=[];
let finalhike:number []=[];


for (let i=0;i<names.length;i++)
{
  let percent = 0;
    let bonus = 0;
    let reward = 0;



if(ratings[i]>=4.0)
{
percent=15.0;
bonus=1500;

}

else if(ratings[i]>=3.0 && ratings[i] < 4)
{
percent=10;
bonus=1200;
}

else {
        percent = 3;
        bonus = 300;
    }

    // Extra reward based on experience
    if (experience[i] >= 5) {
        reward = 5000;
    }


    // Calculate hike
    let hike = (baseSalary[i] * percent / 100) + bonus + reward;

    // Calculate hike %
    let hikePercentageValue = hike / baseSalary[i];

        // Output
    console.log("Employee: " + names[i]);
    console.log("Hike: " + hike);
    console.log("Hike %: " + (hikePercentageValue * 100)+ "%");
    console.log("---------------------------");
}



