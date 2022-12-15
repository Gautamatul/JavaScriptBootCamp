let arr = ["atul", "gautam"];

arr.pop(); // remove from back
console.log(arr);

arr.push("Gautam"); // add in the back 
console.log(arr);

arr.shift()
console.log(arr); // take from front 

arr.unshift("Atul")
console.log(arr); // add in the front


let test = arr;
test.push("Test");
console.log(arr); 
console.log(test); 

arr.pop();
console.log(arr); 
console.log(test); 

test.pop();
console.log(arr); 
console.log(test);

let test2 = arr;
test2.push("Test2")
console.log(arr); 
console.log(test);
console.log(test2); 
console.log("Welcome to Programiz!");



const arr2 = ["atul", "gautam"];
let test3 = [...arr2];
test3.push("Test");
console.log(arr2); 
console.log(test3); 

let test4 = test;
test.pop();
console.log(arr2); 
console.log(test3)
console.log(test4)

// Do not compare Arrays with ==, it's reference comparision

// arrays are referenced one changes all, so it you want to manage independent copy the use destructuring not assignment.

for (val of test3){
  console.log(val);
}

for (val in test3){
  console.log(val);
}