// Task 1: Concatenate Two Strings Without Using Methods
// Description: Manually append the characters of one string to another, character by character, without using any built-in string methods.
// •Input:
// String 1: "Hello"
// String 2: "World"
// •Output:
// Result: "HelloWorld"
string1="Hello";
string2="World";
console.log(`"${string1}${string2}"`);
// "HelloWorld"                                       script.js:10 

// Task 2: Create and Display an Object Manually
// Description: Create an object to store details of a student (name, age, grade). Display the student’s details by manually accessing object properties (no methods/functions).
// •Input:
// Name: "John"
// Age: 20
// Grade: "A"
// •Output:
//  Name: John  
// Age: 20  
// Grade: A
input={
Name: "John",
Age: 20,
Grade: "A"}
console.log(`Name: ${input.Name}
Age: ${input.Age}
Grade: ${input.Grade}`);
// Name: John                                         script.js:27 
// Age: 20
// Grade: A

// Task 3: Count Occurrences of a Specific Character in a String Without Using Methods
// Description: Manually count the number of occurrences of a specific character in a given string.
// •Input:
// String: "banana"
// Character to count: "a"
// •Output:
// Result: 3 (The character "a" appears 3 times in "banana")
fruit="banana";
count=0;
for(var i of fruit){
    if("a"==i){
        count++
    }
}
console.log(`The character "a" appears ${count} in "${fruit}`);
// The character "a" appears 3 in "banana                script.js:48

// Task 4: Create an Object and Retrieve Properties Without Methods
// Description: Create an object representing a car (make, model, year, color) and manually retrieve and display the properties.
// •Input:
// Car Object:
// Make: "Toyota"
// Model: "Corolla"
// Year: 2020
// Color: "Blue"
// •Output:
//  Make: Toyota  
// Model: Corolla  
// Year: 2020  
// Color: Blue
car={
    Make: "Toyota",
    Model: "Corolla",
    Year: 2020,
    Color: "Blue"
}
console.log(`Make: ${car.Make}
Model: ${car.Model}
Year: ${car.Year}
Color: ${car.Color}`)
// Make: Toyota                                           script.js:70 
// Model: Corolla
// Year: 2020
// Color: Blue

// Task 5: Manually Reverse a String
// Description: Write a program to reverse a string character by character without using any built-in string methods or functions.
// •Input:
// String: "abcdef"
// •Output:
// Result: "fedcba"
string="abcdef";
res='';
for(var i of string){
    res=i+res;
}
console.log(res);
// fedcba                                                 script.js:90 
