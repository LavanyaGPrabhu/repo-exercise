/** How to take input from the user? (Not mentioned in course)
* const readline = require('readline');
* const r1 = readline.createInterface({
*     input: process.stdin,
*     output: process.stdout
* });
* r1.question("Enter your input: ", (input)=>{
*     console.log(`The input you entered is: ${input}`);
*     r1.close();
* });
*/

// use ` in console.log to use the variable inside the string.
// if you want more inputs after this, take is as a nested question inside the first question,
// before closing the readline, close it after the last question.
// input taken is of string datatype, convert it to integer using the parseInt(input) function.

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("\nTask 1: Using the logical && operator");
r1.question("Enter your score out of 10: ", (score)=>{
    console.log("Mid-level skills:", score>=6 && score<8);
    // Mid-level skills: true if score is greater than or equal to 6 and less than 8, false otherwise.
    console.log("\nTask 2: Using the logical || operator");
    r1.question("Enter the time remaining: ", (timeRemaining)=>{
        r1.question("Enter the value of energy: ", (energy)=>{
            console.log("Game over:",timeRemaining==0 || energy==0);
            // Game over: true if timeRemaining is 0 or energy is 0, false otherwise.
            console.log("\nTask 3: Using the modulus operator, %, to test if a given number is odd");
            r1.question("Enter value of num1: ", (num1)=>{
                r1.question("Enter value of num2: ", (num2)=>{
                    num1=parseInt(num1);
                    num2=parseInt(num2);
                    var test1=num1%2;
                    var test2=num2%2;
                    var res1=test1==0;
                    var res2=test2==0;
                    console.log("Is:", num1, "an even number?", res1);
                    console.log(`Is: ${num2} an even number? ${res2}`);
                    // num1 is greater than num2: true if num1 is greater than num2, false otherwise.
                    console.log("\nTask 4: Add numbers using the + operator");
                    var res = num1+num2;
                    console.log("Sum of", num1, "and", num2, "is", res);
                    console.log("\nTask 5: Concatenate numbers and strings using the + operator");
                    r1.question("Enter your first name: ", (fname)=>{
                        r1.question("Enter your last name: ", (lname)=>{
                            console.log("Full name: ", fname+" "+lname);
                            console.log("\nTask 6: Use the += operator to accumulate values in a variable");
                            var total=0;
                            total+=num1;
                            total+=num2;
                            console.log(`Total: ${total}`);
                            r1.close();
                        });
                    });
                });
            });
        });
    });      
});