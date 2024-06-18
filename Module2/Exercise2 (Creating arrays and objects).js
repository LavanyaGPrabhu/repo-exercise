/** How to dequeue an array not pop? (Not mentioned in course)
* var arr =[];
* arr.push("a","b","c","d","e");
* console.log(arr.shift());
*/

/** How to add an element to the beginning of an array? (Not mentioned in course)
* var arr =[];
* arr.push("a","b","c","d","e");
* arr.unshift("z");
*/

/**
 * arr.push() adds an element to the end of the array. This is similar to push operation in a stack.
 * arr.shift() removes the first element from the array and returns it. This is similar to dequeue operation in a queue.
 * arr.pop() removes the last element from the array and returns it. This is similar to pop operation in a stack.
 * arr.unshift() adds an element to the beginning of the array. This is similar to enqueue operation in a queue.
 * console.log(arr.push("a","b","c","d","e")); returns the length of the array after adding the elements at the end.
 * console.log(arr.unshift("z")); returns the length of the array after adding the element at the beginning.
 */

console.log("\nTask 1");
var clothes =[];
console.log(clothes.push("Jeans","Shirt","Jacket","Socks","Sweater"));
console.log(clothes.pop());
clothes.push("Coat");
console.log(clothes.shift());
console.log(clothes.unshift("Scarf"));
console.log(clothes);

console.log("\nTask 2");
var favCar ={};
favCar.color = "Blue";
favCar["convertible"]= true;
console.log(favCar);


//Adding fuction to an object
favCar.turnKey = function(){
    console.log("Vroom Vroom");
}
console.log(favCar);//{color:'Blue', convertible:true, turnKey:[Function(anonymous)]}
favCar.turnKey();//Vroom Vroom

console.log(typeof('Hi'));  //string
console.log(typeof(5));     //number
console.log(typeof(true));  //boolean
console.log(typeof({}));    //object
console.log(typeof([]));    //object
console.log(typeof(2>3));   //boolean
console.log(typeof([1,2,3]));   //object
console.log(typeof(function(){}));  //function
console.log(typeof(favCar));    //object