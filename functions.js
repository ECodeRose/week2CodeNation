// // //Activity 1
// const factorial = (n) => {
//     if ((n === 0) || (n == 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

//Activity 2
// let orderCount = 0;

// const takeOrder = (topping, base) => {
//     console.log(`Pizza with ${topping} and ${base}`);
//     orderCount++;
// }

// takeOrder("pineapple", "deep pan")
// takeOrder("mushrooms", "thin and crispy")
// console.log(orderCount)

//Activity 3
// const ethanBank = {
//     pin: 1234,
//     amount: 1000,
// };

// const cashWithdrawal = (amountwithdrawal, pin) => {
//     console.log(`Withdrawing ${amountwithdrawal}`);
//     if (pin != ethanBank.pin){
//         console.log("Wrong pin");
//         return;
//     }
//     if (amountwithdrawal > ethanBank.amount){
//         console.error("insufficient funds");
//     } else {
//         ethanBank.amount -= amountwithdrawal;
//         console.log(`successfully withdrew £${amountwithdrawal}`)
//         console.log(`Remaining balance is £${ethanBank.amount}`)
//     }

// };

// cashWithdrawal(300, 12345678);
// cashWithdrawal(90, 33333333);
// cashWithdrawal(20, 1234);
// cashWithdrawal(1000, 1234);
