/**
 * Reduce in array
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * The reducer function takes four arguments:
 * 1. Accumulator
 * 2. Current Value
 * 3. Current Index (optional)
 * 4. Source Array (optional)
 * The reduce() method can accept an initial value as the second argument.
 */

const arrOfNum=[1,2,3,4,5,6,7,8,9,10];
const arrOfStr=["a","ab","abc","abcd","a","ab"];
const arrOfObj=[{name:"John",age:25},{name:"Jane",age:30},{name:"Jack",age:35},{name:"Jill",age:40},{name:"John",age:45},{name:"Jane",age:60},{name:"Jack",age:65}];
const arrOfArrays=[[1],[2,3],[4,5,6],[7,8,9,10]];

//using reduce in array of numbers to sum all elements
const A=arrOfNum.reduce((total, num)=>total+num,0);
console.log("Sum: ",A);

//using reduce in array of numbers to multiply all elements
const B=arrOfNum.reduce((total, num)=>total*num,1);
console.log("Product: ",B);

//using reduce in array of strings to concatenate all elements
const C=arrOfStr.reduce((res,str)=>res+str,"");
console.log("Concat: ",C);

//using reduce in array of objects to concatenate all elements
const D=arrOfObj.reduce((res,obj)=>res+obj.name,"");
console.log("Concat of obj.name: ",D);

//using reduce in array of arrays to concatenate all elements
/**
 * This is called flatening an array of arrays
 */
const E=arrOfArrays.reduce((res,arr)=>res.concat(arr),[]);
console.log("Concat of arrays: ",E);

//using reduce in array of numbers to sum all even elements
const F=arrOfNum.reduce((total, num)=>num%2===0?total+num:total,0);
console.log("Sum of even: ",F);

//using reduce in array of strings to count the number of times an element appears
const G = arrOfStr.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {}
);
console.log("Count of obj.name: ",G);

//using reduce in array of objects to group objects by a specific property
const H = arrOfObj.reduce((accumulator, currentValue) => {
    const key = currentValue.name;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {}
);
console.log(H);

//using reduce in array of objects to group objects by a specific property and sum the values of another property
const I = arrOfObj.reduce((accumulator, currentValue) => {
    const key = currentValue.name;
    if (!accumulator[key]) {
      accumulator[key] = 0;
    }
    accumulator[key] += currentValue.age;
    return accumulator;
  }, {}
);
console.log(I);

//using reduce in array of strings to remove duplicates
const J = arrOfStr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []
);
  
console.log(J);