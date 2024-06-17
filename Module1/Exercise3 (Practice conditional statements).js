const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter your age: ", (age)=>{
    if(age>=65){
        console.log("You get your income from your pension.")
    }
    else if(age<65 && age>=18){
        console.log("Each month you get a salary.")
    }
    else if(age<18 && age>=0){
        console.log("You get an allowance.")
    }
    else{
        console.log("the value of the age is not numerical.")
    }
    r1.question("Enter the day: ", (day)=>{
        switch(day){
            case "Monday":
            case "monday":
                console.log("Today is Monday.")
                break;
            case "Tuesday":
            case "tuesday":
                console.log("Today is Tuesday.")
                break;
            case "Wednesday":
            case "wednesday":
                console.log("Today is Wednesday.")
                break;
            case "Thursday":
            case "thursday":
                console.log("Today is Thursday.")
                break;
            case "Friday":
            case "friday":
                console.log("Today is Friday.")
                break;
            case "Saturday":
            case "saturday":
                console.log("Today is Saturday.")
                break;
            case "Sunday":
            case "sunday":
                console.log("Today is Sunday.")
                break;
            default:
                console.log("There is no such day.")
        }
        r1.close();
    });
});

