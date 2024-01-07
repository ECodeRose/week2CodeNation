//Activity 1
// let age = 18;

// if (age > 17) {
//     console.log("Yes I can serve you");
// } else console.log("You aren't old enough");

// //stretch add variable (country)
// let age = 18;
// let country = "England"

// if (age > 17 && country == "England") {
//     console.log("Yes I can serve you");
// } else console.log("You aren't old enough");

//Activity 2
// let pizzaTopping ="mushrooms";

// switch(pizzaTopping){
//     case "cheese":
//     case "tomato":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "peppers":
//     case "bbq sauce":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`);
//         break;
//     default:
//         console.log(`${pizzaTopping} should not be on a pizza`);
// }

//Activity 3
// let password = "password"

// if (password.length < 8){
//     console.log("the password is too short");
// } else (console.log(password))

// //stretch
// let num = 15

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisible by 3 or 5");
// } else { console.log("This number is not divisible by 3 or 5") }

//Activity 4
// let num = 15

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizzbuzz");
// } else if (num % 3) {
//     console.log("fizz");
// } else if (num % 5) {
//     console.log("buzz");
// } else { 
//     console.log(num) 
// }


//Activity 5
// let num = "20402"
// let result = true

// for (let i = 0; i < num.length / 2; i++) {
//     console.log(`compare first ${num[i]} vs last ${num[num.length - 1 - i]}`);
//     if (num[i] != num[num.length - 1 - i]) {
//         result = false
//         break;
//     }
// }
// if (result) {
//     console.log(`${num} is a palindrome`);
// } else {
//     console.log(`${num} is not a palindrome`);
// }

//Activity 6
// let time = 7
// let placeOfWork = "school"
// let townOfHome = "Manchester"

// //  0-8 home 8-9 commute 9-18 work 18-19 commute 19-24 home
// if (time < 0 || time > 24) {
//     console.log("error")
// } else if (time < 8 || time > 19) {
//     console.log(`I am at home in ${townOfHome}.`);
// } else if (time >= 9 && time < 18) {
//     console.log(`I am at the ${placeOfWork}.`);
// } else (console.log("commuting"))

// Activity 7
// let wordString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let noVowelMessage = "There are no vowels in this string"
// let lastVowelIndex = -1

// for (let i = wordString.length - 1; i >= 0; i--) {
//     let letter = wordString[i];
//     if (letter == `a` || letter == `e` || letter == `i` || letter == `o` || letter == `u`) {
//         lastVowelIndex = i
//         break;
//     } 
// }
// if (lastVowelIndex > -1) {
//     console.log(`Last vowel index is ${lastVowelIndex}`)
// } else {
//     console.log(noVowelMessage)
// }

// // Activity 8
// let word = "aba"

// // using function
// function isFirstAndLastSame(str) {
//     str = str.toLowerCase();

//     if (str.length > 0) {
//         return str.charAt(0) === str.charAt(str.length - 1);
//     } else {
//         return false;
//     }
// }
// console.log(isFirstAndLastSame(word))

// // using if statement only
// let isFirstAndLastSame;
// if (word.charAt(0) === word.charAt(word.length - 1)){
//     isFirstAndLastSame = true;
// } else {
//     isFirstAndLastSame = false;
// }
// console.log(isFirstAndLastSame)

// Activity 9
let num1 = 2
let num2 = 4

let sumOfNums = num1 + num2;

if (sumOfNums % 2 === 0) {
    console.log(sumOfNums)
} else {
    console.log(num1 * num2)
}