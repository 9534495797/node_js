let fruits=["apple","banana","guava","pomegranate"];
console.log(fruits[0]);
// console.log(fruits[-1]);// it will return undefine in js
console.log(fruits[2]);


//methods on array

//1. to add at end of array
// fruits.push("kikivi");
// console.log(fruits);

// //2. to add at begin
// fruits.unshift("mango");
// console.log(fruits);

// //3. to remove last element
// let removelast=fruits.pop();


// console.log(fruits);
// //4. to remove first element

// let removefirst=fruits.shift();

// console.log(fruits);



// // to find the index of an element

// let indexofbanana= fruits.indexOf("banana");
// console.log(indexofbanana);

// //iterate using for loop
// for(let i =0;i<fruits.length;i++){
    
// console.log(fruits[i]);
// }


// //slicing an array

// let citrus=fruits.slice(2,4);

// console.log(citrus);




// splicing an array >> (modify original array)
let removed=fruits.splice(1,2,"pear","melon");
console.log(removed);


//concatinate

let morefruits=["orsange","pineapple"];
let allfruits=fruits.concat(morefruits);
console.log(allfruits);