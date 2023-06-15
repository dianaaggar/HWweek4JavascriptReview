             // ----------HOMEWORK WEEK 4 DAY 2--------------//

//-------I. Variables & Datatypes--------------//

//  1- How do we assign a value to a variable? 
     // With the assignment operator =
     // declare with let const and var ( keyword )
     // ex: 
     const firstNamename = "diana";  
     console.log(firstName);
     


//   2- How do we change the value of a variable?
     // We can simply reassign the value of a variable in another line of code

// ex: 
      let myVariable = 10;  // Assigns the value 10 to the variable "myVariable"
           myVariable = 20;     // Changes the value of "myVariable" to 20


// 3-How do we assign an existing variable to a new variable?
   // We can add it to the variable with a function
    let myVar = 20;
    let myNewVar = myVar;


// 4-Remind me, what are declare, assign, and define?
// are often used in relation to variables.
  // Declare a value is saying what the value is in a variable ex: let firstName;
  //Assigning a value is making a variable = to something.ex: let firstName = "diana";
  //Defining a variable is saying what the variable is, and describing it to the computer. ex: 


// 5-What is pseudocoding and why should you do it?
   //pseudocoding is the process of laying out the logical steps of an algorithm or program in language that is understandable to humans. 
   //It's a tool to help us think through our program's logic and structure. Once we have a well-defined pseudocode, we can then translate it into 
   //actual code 

// 6- What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   // 90% thinking about it, 10%  taping code it



          //-------------------------part B------------------------------------//

// Step 1: Create a variable called firstVariable and assign it the value "Hello World"
let firstVariable = "Hello World";

// Step 2: Change the value of firstVariable to some number
firstVariable = 31;

// Step 3: Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Step 4: Change the value of secondVariable to any string
secondVariable = "This is a string";

// Step 5: Print the value of firstVariable
console.log(firstVariable);

// Step 6: Create a variable called yourName and set it equal to your name as a string
let yourName = "Diana Aggar";

// Step 7: Concatenate the string "Hello, my name is " with the variable yourName
let greeting = "Hello, my name is " + yourName;

console.log(greeting);

                  //-------------------------- part C -----------------------//
 /* const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); 
console.log(a * a === d); 
console.log(48 == '48');  */

                //----------------------------------- Part D ------------------------------//
 // let animal = "cow";
// if (animal === "cow"){
//     console.log("Moo!");
// } else {
//     console.log("Thats not a cow!");
// }

                  //-----------------------------------Part E ------------------------//

 /* let age = 16
    if (age >= 16){
        console.log("here are the keys!");
     } else {
         console.log("sorry, you're too young!");
     }
*/
             //-------------------------------II LOOPS ----------------------------//
    /*  ----A-----
    1/ for (let i = 0; i <= 10; i++){
        console.log(i);
    }
    
    2/ for (let i = 10; i <= 400; i++){
        console.log(i);
    }

    3/  for (let i = 12; i <= 4000; i+=3){
       console.log(i);
    }
     ------B----
     for (let i = 0; i <= 100; i++){
        if(i % 2 == 0){
           console.log(`${i} is even`); 
        }else{ 
          console.log(i)
        }
     }
     -----------C---------

      for (let i = 0; i <= 100; i++){
       if(i % 5 == 0){
       console.log(`${i} is a multiple of 5`); 
        }if(i % 3 == 0){
       console.log(`${i} is a multiple of 3`);
         }else{ 
        console.log(i)
        }
        }
    ---------------D--------------
    let bank_Account = 0
    for (let i = 1; i <= 10; i++){
    bank_Account += i;
     }
    console.log(bank_Account)

    for (let i = 0; i<= 100; i++){
        bank_Account += i*2
    }
     console.log(bank_Account);

    //----------------------------   III. Arrays & Control flow--------------------------------------//

    // What are the things in an array called? an elements
    // Do Arrays guarantee those things will be in order? YES 
    // What real-life thing could you model with an array? THE DAYS OF THE WEEK

    // ----------- part B----------------

    // Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["first quote.", "second quote", "third quote."];
console.log(quotes);

// -------------------part C: Accessing elements ---------------

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. 
console.log(randomThings);


// ------------------------- part D. Change values--------------------//

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//--------------------------- part E. Mix It Up-----------------------------//

// Given the following array: 
// const myArray = [5, 10, 500, 20];
// console.log(myArray);

// Add the string "Aegon" to the end of the array. 
myArray.push("Aegon");
console.log(myArray);

// Add another string of your choice to the end of the array.
myArray.push("a new string ");
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray);

/ Did you mutate the array? 
// ==> yes

// What does mutate mean? 
// ==> changing the content or value  of the variable

// Did the .reverse() method return anything?
// ==> yes, it returns a reference to the array that had just been reversed.

//--------------- F. Biggie Smalls-----------------//

// Create a variable that contains an integer.
let variable = 21;

// Write an if ... else statement that:
// ... console.log()s "little number" if the number is entered is less than 100
if (variable < 100) { console.log("little number"); }

// ... console.log()s big number if the number is greater than or equal to 100.
else { console.log("big number"); }


//------------------------ G. Monkey in the Middle ---------------- //
   /* Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey". */   

// let variable = 6
// if (variable <= 5){
//     console.log("Little number")
// }else if (variable >= 10){
//     console.log("Big number")
// } else {
//     console.log("monkey");
// }

//-----------------------------------H. What's in Your Closet? --------------------// 


/* const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];    */

// What's Kristyn wearing today? (third item) 
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! (...) access the first element in Thom's shirtsarray.
let thomsShirt = thomsCloset[0][0];

// In the same way, access one item from Thom's pants array.
let thomsPants = thomsCloset[1][0];

// Access one item from Thom's accessories array.
let thomsAcc = thomsCloset[2][0];

// Log a sentence about what Thom's wearing. 
console.log("Thom is looking fierce in a " + thomsShirt +
  ", " + thomsPants + " and " + thomsAcc + "!");

// Get more specific about what kind of PJs Thom's wearing this winter. 
// Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset); 


//-------------------------------- IV. Functions ---------------------// 
//Functions A
// const printGreeting = (name) => {
//     console.log("Hello there, " + name );
// }

    //Functions B
// const printCool = (name) => {
//     console.log(name + " is cool");
// }
// printCool("yasten")

    //Functions C
//     const calculateCube = (volume) => {
//         return (volume * 25)
//     }
// console.log(calculateCube(5))

    //Functions D
// const isVowel = (char) => {
// vowel = ['a', 'i', 'e', 'o', 'u'];
// return vowel.includes(char);
// }
// console.log(isVowel('a'));

  //Functions E
//Write a function getTwoLengthsthat accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length of the corresponding string.
//

// const getTwoLengths = ("hank","Hippopopalous" ) => {
//     let myArray = [];
//     for(let i = 0; i <= hank.length; i++){
//         if(i === hank.length){
//             myArray.push(i)
//         }
//     }
//     for(let i = 0; i <= Hippopopalous.length; i++){
//         if(i === Hippopopalous.length){
//             myArray.push(i)
//         }
//     }
//     return myArray
// }

// console.log(getTwoLengths("Hank","Hippopopalous"));
//--------------------------------------//
    //Functions F
//     const getMultipleLengths = (array) => {
//         const results = [];
//         for(let i=0; i<array.length; i++){
//         //see operator precedence
//         results.push(array[i].length);
//     }
//     return results;
// }

//     console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

//----------------------------------------//
//Functions G
    // const maxofThreeNumbers = (x, y, z) => {
//     if (x >= y) {
//         return x;
//     } 
//     else if (x >= y) {
//         return y;
//     } 
//     else {
//         return z;
//     }
// }

// console.log(maxofThreeNumbers(1,2,3));
// --------------------------------------------------------//
 // ----H 
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

 //console.log(longest);

 //---------------------------------
 // ....A 
 //let user = {
   // name: 'yast',
    //email: 'abc@gmail.com',
    //age: 30,
    //purchased: [],
//   }
//--------------B  
    // user.email = "abc@gmail.com"
    // console.log(user);

    // user.age++
    // console.log(user);


//-------C 
// user.location = "pittsburgh"
    // console.log(user);

//---------D

    // user.purchased.push("carbohydrates")
    // user.purchased.push("peace of mind")
    // user.purchased.push("Merino jodhpurs")
    // console.log(user.purchased[2]);

//-----------------------
// user.friend = {
// name: "Grace Hopper",
// age: 85
//  }
