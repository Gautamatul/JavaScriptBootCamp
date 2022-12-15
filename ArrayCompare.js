
let arr1 = ["test","atul"];
let arr2 = ["atul", "test"];

console.log(arr1 == arr2);
console.log(JSON.stringify(arr1) == JSON.stringify(arr2));

// order changed now need to check contains using loop. 

// sort and compare 

// check the length first, now take one by one and compare when the order is not same 
// other option is to sort and then stringify and compare
let val = arr1.every(function(value, index) {
    return arr2.includes(value);
});

console.log(val);