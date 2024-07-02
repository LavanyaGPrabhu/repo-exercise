/**
* Find in array
* The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
* If no values satisfy the testing function, undefined is returned.
* The find() method does not change the original array.
* The find() method also has an optional second argument for the index of the array.
*/

const arrOfNum=[1,2,3,4,5,6,7,8,9,10];
const arrOfStr=["a","ab","abc","abcd","a","ab"];
const arrOfObj=[{name:"John",age:25},{name:"Jane",age:30},{name:"Jack",age:35},{name:"Jill",age:40},{name:"John",age:45},{name:"Jane",age:60},{name:"Jack",age:65}];
const arrOfArrays=[[1],[2,3],[4,5,6],[7,8,9,10]];

//using find in array of numbers to find the first even number
const A=arrOfNum.find((x)=>x%2===0);
console.log("First even number: ",A);

//using find in array of strings to find the first string with length greater than 3
const B=arrOfStr.find((x)=>x.length>3);
console.log("First string with length > 3: ",B);

//using find in array of strings to find the first string that contains a specific character
const C=arrOfStr.find((x)=>x.includes("a"));
console.log("First string that contains 'a': ",C);

//using find in array of numbers to find the first number divisible by 11
const D=arrOfNum.find((x)=>x%11===0);
console.log("First number divisible by 11: ",D);

//using find in array of objects to find the first object with age greater than 30
const E=arrOfObj.find((x)=>x.age>30);
console.log("First object with age > 30: ",E);

//using find in array of objects to find the first object with a specific property value
const F=arrOfObj.find((x)=>x.name==="Jane");
console.log("First object with name 'Jane': ",F);

//using find in array of numbers to find the first even number after index 5
const G=arrOfNum.find((x,i)=>i>5&&x%2===0);
console.log("First even number after index 5: ",G);


