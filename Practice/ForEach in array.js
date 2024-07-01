const arrOfNum=[1,2,3,4,5,6,7,8,9,10];
const arrOfStr=["a","ab","aBc","Abcd"];
const arrOfObj=[{name:"John",age:25},{name:"Jane",age:30},{name:"Jack",age:35},{name:"Jill",age:40}];

//using forEach in array of numbers to multiply each element by 2
const A = []
arrOfNum.forEach((x)=>A.push(x*2));
console.log("Multiply by 2: ",A)

//using forEach in array of numbers to multiply only the even elements by 2
const B = []
arrOfNum.forEach((x)=>x%2===0?B.push(x*2):B.push(x));
console.log("Multiply only even by 2: ",B)

//using forEach in array of strings to convert each element to uppercase
const C = []
arrOfStr.forEach((x)=>C.push(x.toUpperCase()));
console.log("Uppercase: ",C)

//using forEach in array of strings to toggle the case of each letter of the element
const D = []
arrOfStr.forEach((x)=>{
    let str = ""
    for (let i = 0; i < x.length; i++) {
        str += x[i] === x[i].toUpperCase() ? x[i].toLowerCase() : x[i].toUpperCase()
    }
    D.push(str)
})
console.log("Toggle case: ",D)

//using forEach in array of objects to extract a specific property from each object
const E = []
arrOfObj.forEach((x)=>E.push(x.name));
console.log("Extract name: ",E)

//using forEach in array of objects to extract a specific property from each object and convert it to uppercase
const F = []
arrOfObj.forEach((x)=>F.push(x.name.toUpperCase()));
console.log("Extract name and uppercase: ",F)

//using forEach in array of numbers to filter out even numbers
const G = []
arrOfNum.forEach((x)=>x%2!==0?G.push(x):null);
console.log("Filter out even: ",G)

//using forEach in array of strings to filter out strings with length greater than 3
const H = []
arrOfStr.forEach((x)=>x.length<=3?H.push(x):null); 
console.log("Filter out length > 3: ",H)

//using forEach in array of strings to filter in strings that contain a specific character
const I = []
arrOfStr.forEach((x)=>x.includes("a")?I.push(x):null);
console.log("Filter in contain a: ",I)