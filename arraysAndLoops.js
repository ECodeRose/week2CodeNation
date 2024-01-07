// //Activity 1
// const favouriteFilm = [
//     "Jumanji",
//     "Lion King",
//     "Spiderman",
//     "Godzilla",
//     "Smurfs",
// ];

// favouriteFilm.push("Inception", "Harry Potter");

// for (let i = 0; i < favouriteFilm.length; i++) {
//     console.log(favouriteFilm[i])
// }

// //Activity 2
// for (let i = 0;i < 6 ;i++){
//     let x = Math.floor((Math.random() * 50)+1);
//     console.log(x);
// }

// //Activity 3
// for (let i = 9;i >= 0 ;i--){
//     console.log(i);
// }

// //Activity 4
// const films = [
//     "Jumanji",
//     "Lion King",
//     "Ghostbusters",
//     "Godzilla",
// ];

// for (let i = 0; i < films.length; i++){
//     console.log(films[i])
// }

// if (films[2] === "Ghostbusters"){
//     console.log("Yay its Ghostbusters");
// } else {
//     console.log("Boo! We want Ghostbusters");
// }

// //Activity 5
// for (let i = 0;i < 6 ;i++){
//     let x = Math.floor((Math.random() * 30)+1);
//     console.log(x);
//     if (x % 7 === 0){
//         console.log("This number is divisible by 7")
//     } else {
//         console.log("This number is not divisible by 7")
//     }
// }

// //Activity 6
// const efollowers = [
//     "Dave",
//     "Bob",
//     "James",
//     "Sophie",
// ]
// const rfollowers = [
//     "Dave",
//     "Bob",
//     "Jenny",
//     "Sally",
// ]

// for (let i = 0; i < efollowers.length; i++){
//     for (let j= 0; j < rfollowers.length; j++){
//         if (efollowers[i] === rfollowers[j]){
//             console.log("We have matching followers " + efollowers[i])
//         }
//     }
// }

// //Activity 7
// for (let i = 0; i < 2; i++){
// }

// let x = 0
// while (x<2){
//     x ++;
// }
// let y = 0
// do {
//     y++
// } while (y<2)


// Syntax: for (initialization; condition; increment/decrement) { /* code */ }
// Pros:
// Compact way to control loops with known iterations.
// Ideal for iterating over arrays or when the number of iterations is definite.
// Cons:
// Can be verbose for simple loops.
// Prone to infinite loops if conditions aren't properly set.
// while loop:

// Syntax: while (condition) { /* code */ }
// Pros:
// Offers flexibility for indefinite loops when the number of iterations is unknown initially.
// Useful when waiting for a condition to change.
// Cons:
// Requires explicit initialization outside the loop.
// Risk of infinite loops if the condition is never false.
// do-while loop:

// Syntax: do { /* code */ } while (condition);
// Pros:
// Guarantees the execution of the loop body at least once before checking the condition.
// Suitable for situations where the loop body must execute first.
// Cons:
// Similar risks of infinite looping as while loops.
// Less commonly used compared to for and while loops.