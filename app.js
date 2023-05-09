//Easy 1

// create function that takes in a random array
// and outputs two new arrays of even and odd numbers
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//    Odd Numbers: [7, 11, 15]
const exArray = [1, -2, 4, 7, -45, 48, -342]
function arraySorter(x) {
    // first we make two variables with empty arrays
    // these arrays will be the arrays that hold the pos/neg numbers
    let negArray = [];
    let posArray = [];
    // then we create a for loop that loops through the original array
    // and checks if a number is positive or negative
    // if it is positive it gets pushed using .push() method to the new arrays
    for(i=0; i<=x.length-1; i++) {
        if(x[i]<0){
            negArray.push(x[i])
        } else {
            posArray.push(x[i])
        }
    }
    // finally we console log our new positive and negative arrays
    console.log(posArray);
    console.log(negArray);
}
arraySorter(exArray)

const numbers = [-1, 2, 4, 7, 45];

function arraySorter() {}




//Easy 2




let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83];       //example two
numArray = numArray.filter((number) => {
  //.filter creates a new array that is ready for elements that pass the function's test
  //function that is searching for a number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // created a for loop to loop through the array and comparing the root of the number. Math.sqrt is used to square root a number
    if (number % i === 0) return false; // if the number remainder is 0 then it will be false and else will return true.
  }

  return true;
});

console.log(numArray);



// Medium 1
let vowls = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]  // lists all the vowels including uppercase and lowercase
function vowelChecker(x){
    for(let letter of x){ //  loop in this function iterates through each character in the input parameter x.
        if (vowls.includes(letter)){  // checks if the letter has onf of the vowels listed above
            console.log('this is a vowel');
        }else{ // if it does not match a vowel it willl return not a vowel
            console.log('this is not a vowel');
        }
    }
}
vowelChecker('b')
vowelChecker('A')



//Medium 2
// create a function that accepts two strings
// then determines if the first string is an anagram of the second string
// by returning a boolean
// example
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//    String 2: Dogs eat ants
// Output: False
const string1 = ‘So dark the con of man’
const string2 = ‘Madonna of the Rocks’
const string3 = “fried”
const string4 = “fired”
function anagramCheck(x,y) {
    // below are variables that contain the regex replace method
    // this method removes the spaces in string sentences
    let removespace1 = x.replace(/\s+/g, “”);
    let removespace2 = y.replace(/\s+/g, “”);
    console.log(removespace1)
    console.log(removespace2)
    // This method takes the above varaible strings and makes a new set of virables
    // first we used the tolowercase method to set everything lowercase
    // next we used split(“”) to split all the characters
    // then we used sort which sorted the individual characters A-Z
    // then we used join
    let sortedString1 = removespace1.toLowerCase().split(“”).sort().join();
    let sortedString2 = removespace2.toLowerCase().split(“”).sort().join();
    console.log(sortedString1)
    console.log(sortedString2)
    // now we made a if else that determined whether the strings are the same
    // if they are the same it returns true
    // if they are not the same it returns false
    if(sortedString1 === sortedString2){
        console.log(true);
    } else {
        console.log(false);
    }
}
anagramCheck(string1, string2)




//Medium 3

function twoNums(a, b) {
  if (a > b) {
    //creating a conditonal to tell the greatest number out of the two parameeters 
    console.log(a + " is greater than " + b); 
    return a % b; // gives result for remainder of the two numbers
  } else {
    console.log(b + " is greater than " + a);
    return b % a;
  }
}

console.log(twoNums(336, 360));
console.log(twoNums(78, 126));
console.log(twoNums(888, 22));


// Medium 4
let car = {
    make: "Subaru",
    model: "STI",
    year: 2018,
    mileage: 2000,
    color: "white",
    driveToWork(){
        const oldMilage = this.mileage // created a variable oldMileage and set it as 2000
        this.mileage += 33 // added 33 miles to the original 2000 miles
        console.log(`old mileage: ${oldMilage}| new mileage: ${this.mileage}`); // logged the old mileage which is 2000 and the new updated mileage which is 2033
    },
    driveAroundTheWorld(){
        const oldMilage = this.mileage // created another variable oldMileage set to the previous updated mileage that was used in driveToWork
        this.mileage += 24000 // adds 2400 miles to 2033
        console.log(`old mileage: ${oldMilage} |  new mileage: ${this.mileage}`); //logs old and new mileage
    },
    runErrands(){
        const oldMilage = this.mileage //created another variable oldMileage set to the previous updated mileage that was used in driveAroundTheWorld
        this.mileage += 30 //adds 30 miles to the 26033
        console.log(`old mileage: ${oldMilage} | new mileage: ${this.mileage}`);
    }
}
car.driveToWork()
car.driveAroundTheWorld()
car.runErrands()

//hard

// create a function that takes in a string and returns a boolean value
// of whether or not the string contains a pair of matching brackets
// these brackets must be nested appropriately in order to return true
const ex1 = ‘This is an example {hahah}’
const ex2 = ‘This aint right {sfdgggh]’
function bracketCheck(x) {
    let removespace = x.replace(/\s+/g, “”);
    console.log(removespace)
    let sortedString = removespace.toLowerCase().split(“”).join();
    console.log(sortedString)
    if (sortedString.includes(“{”) && sortedString.includes(“}”)) {
        console.log(true)
    } else if (sortedString.includes(“(”) && sortedString.includes(“)”)) {
        console.log(true)
    } else if (sortedString.includes(“[”) && sortedString.includes(“]”)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
bracketCheck(ex2)













