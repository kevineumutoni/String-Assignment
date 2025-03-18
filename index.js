//QUESTION 1


//Lets Extract the last four characters from the string below;"extravaganza"
//i will use -4 because -1 starts from the last character, and -4 means start from the 4th last character.

 let v= 'extravaganza';
 let p = v.slice(-4);
 console.log(p);


 //QUESTION 2

 // Let's Insert the following string at the fourth index of the below variable
 //we want to insert "eat" inside "The quick fox jumped over the lazy dog "
 //food.slice(0,4) means start from first character and then stop at the 3rd character after that add "eat" and then add the remaining characters.
 const food = "The quick fox jumped over the lazy dog";
 const updatedFood = food.slice(0, 4) + "eat" + food.slice(4);
 console.log(updatedFood);

 //QUESTION 3

 //Count how many times the following string appears in the string variable:
 // 1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
 //First I decided to first convert to lowercase so that "The" can be also included, otherwise it would be one "the" present.

const story = "The quick brown fox jumps over the lazy dog";
let storyLowerCase = story.toLowerCase();

const countThe = storyLowerCase.split("the").length - 1;
const countBrown = storyLowerCase.split("brown").length - 1;


console.log(`"the" appears: ${countThe} times`);
console.log(`"brown" appears: ${countBrown} time`);



 //QUESTION 4

 //Using JavaScript, find the following words from the following 
 // strings:1. "are"const string1 = "The pupils are reading in the library";
 // 2. "sitting"const string2 = "The child was sitting on the table before it fell"

const stringOne = "The pupils are reading in the library";
const stringTwo = "The child was sitting on the table before it fell";

// Check if "are" is included in  string1
const isArePresent = stringOne.includes("are");

// Check if "sitting" is in string2
const isSittingPresent = stringTwo.includes("sitting");

//log and see if "are" is present in the string1
console.log(`Is "are" present? ${isArePresent}`);
//logging and see if "sitting" is present in string 2

console.log(`Is "sitting" present? ${isSittingPresent}`);

//QUESTION 5

//Convert the following strings into the specified format
// :1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"


//converting  "wonderful" to uppercase

let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

//convert to "amazing" lowercase 

let lowerCaseWordOne = "amazing".toLowerCase();
console.log(lowerCaseWordOne);

//convert UndERneath to lowercase

let lowerCaseWordTwo = "UndERneath".toLowerCase();
console.log(lowerCaseWordTwo);

//converting "A wonderful world to a title case"

const sentence = "A wonderful world";
const titleCaseSentence = "A" + " " + "Wonderful" + " " + "World";

console.log(titleCaseSentence);


