/**
 * Map in array
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * The map() method does not change the original array.
 * The map() method can accept an initial value as the second argument.
 */
/**
 * Filter in array
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * The filter() method does not change the original array.
 * The filter() method can accept an initial value as the second argument.
 * 
 */
const arrOfNum=[1,2,3,4,5,6,7,8,9,10];
const arrOfStr=["a","b","c","d","e","f","g","h","i","j"];
const arrOfObj=[{name:"John",age:25},{name:"Jane",age:30},{name:"Jack",age:35},{name:"Jill",age:40}];

//using map in array of numbers to multiply each element by 2
const A1=arrOfNum.map((x)=>x*2);
console.log(A1);

//using map and filter in array of numbers to multiply only the even elements by 2
const A2=arrOfNum.map((x)=>x%2===0?x*2:x);
console.log(A2);

//using map in array of strings to convert each element to uppercase
const B1=arrOfStr.map((x)=>x.toUpperCase());
console.log(B1);

//using map in array of objects to extract a specific property from each object
const C1=arrOfObj.map((x)=>x.name);
console.log(C1);

//using map in array of objects to extract a specific property from each object and convert it to uppercase
const C2=arrOfObj.map((x)=>x.name.toUpperCase());
console.log(C2);

//using filter in array of numbers to filter out even numbers
const A3=arrOfNum.filter((x)=>x%2!==0);
console.log(A3);

//using filter in array of strings to filter out strings with length greater than 3
const d=["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"];
const D=d.filter((x)=>x.length<=3);
console.log(D);

//using filter in array of strings to filter out strings that contain a specific character
const e=["Apple","banana","Cherry","Date","elderberry","Fig","grape","honeydew","Kiwi","Lemon"];
const E1=e.filter((x)=>x.includes("a"));
console.log(E1);

//using filter in array of strings to filter out strings that start with a capital letter
const E2=e.filter((x)=>x[0]===x[0].toUpperCase());
console.log(E2);

//using filter in array of objects to filter out objects with age greater than 30
const C3=arrOfObj.filter((x)=>x.age<=30);
console.log(C3);

//using filter in array of objects to filter out objects with a specific property value
const C4=arrOfObj.filter((x)=>x.name==="Jane");
console.log(C4);

//using filter in array of objects to filter out objects with a specific property value and convert it to uppercase

const C5=arrOfObj.filter((x)=>x.name==="Jane").map((x)=>x.name.toUpperCase());
console.log(C5);

//using map and filter in array of numbers to multiply each element by 2 and retain only even numbers
const A4=arrOfNum.map((x)=>x=x*2)
const A5=A4.filter((x)=>x%2===0);
const A6=arrOfNum.map((x)=>x=x*2).filter((x)=>x%2===0);
console.log(A5);
console.log(A6);

//using map and filter in array of numbers to multiply only the even elements by 2
const A7=arrOfNum.filter((x)=>x%2===0).map((x)=>x=x*2);


//using map and filter in array of strings to convert each element to uppercase and retain only strings with length less than 4
const B2=arrOfStr.map((x)=>x.toUpperCase()).filter((x)=>x.length<2);
console.log(B2);

//using map and filter in array of objects to extract a specific property from each object and retain only objects with age less than 30
const C6=arrOfObj.map((x)=>x.name).filter((x)=>x.age<30);
console.log(C6);
