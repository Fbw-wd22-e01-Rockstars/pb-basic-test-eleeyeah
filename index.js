// Add answers here 

//#### 1. Los or New?

function nameOfCity(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
        || (str.substring(0, 3) == 'New'))) {
        return str;
    }

    return '';
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("London"));


//#### 2. isDivisible?
//Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is 
// divisible by 100, then return true. If not, return false. 

function isDivisible(int){
    if(int%100===0){
        return true;
    }else{
        return false;
    }
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));


// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".
function isRaining(boolean){
    return (boolean === true) ? "wet day - you need an umbrella!" : "dry day - leave your umbrella at home!";
 }
 
 console.log(isRaining(true));
 console.log(isRaining(false));
 // ##### Example
 // ````javascript
 // isRaining(true) ➞ 'wet day - you need an umbrella'
 // ````
 
 // ### Loops 
 
 // #### 1. Sequence
 // Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.
 function geometricalSequence(){
     let limit = 256;
     let result = [];
         for(i=1; i <= limit; i*=2){
             if(limit >= i){
                 result.push(i)
             }   
         }
     return result.join(" ");
 }
 
 console.log(geometricalSequence());
 // ##### Example
 // ````javascript
 // geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
 // ````
 
 // #### 2. Multiples
 // Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.
 function multiplesOfThree(){
     let result = [];
         for(i=1; i <= 5; i++){
             result.push(i*3);
         }
     return result.join(" ");
 }
 
 console.log(multiplesOfThree());
 // ##### Example
 // ````javascript
 // multiplesOfThree() ➞ '3 6 9 12 15'
 // ````
 
 // ### Math 
 
 // #### 1. You've got the power
 // Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.
 function powerOf(int){
     return Math.pow(int,int);
 }
 console.log(powerOf(3));
 console.log(powerOf(4));
 // ##### Examples
 // ````javascript
 // powerOf(3) ➞ 27
 // powerOf(4) ➞ 256
 // ````
 
 // ### Problem Solving 
 
 // #### 1. How many? 
 // Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 
 function vowelCount(string){
     let Counter = 0;
     for (let i =0; i <= string.length -1; i++){
         if(string.toLowerCase().charAt(i)==="a" || string.toLowerCase().charAt(i)=== "e" || string.toLowerCase().charAt(i) == "i" || string.toLowerCase().charAt(i) == "o" || string.toLowerCase().charAt(i) == "u"){
             Counter += 1;
         }
     }
     return Counter;
 }
 
 console.log(vowelCount("hello"));
 console.log(vowelCount("test"));
 console.log(vowelCount("fbw"));
 console.log(vowelCount("AEIOU"));
 // ##### Examples
 // ````javascript
 // vowelCount("hello") ➞ 2
 // vowelCount("test") ➞ 1
 // vowelCount("fbw") ➞ 0
 // ````
 


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

