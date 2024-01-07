// //Activity 1
// let person = {
//     name: "Brian",
//     age: 38,

//     sayHi() {
//         return `Hello my name is ${this.name}`
//     }
// };
// console.log(person.sayHi());

// //Activity 2
// const pet = {
//     name: "fudge",
//     typeOfPet: "cat",
//     age: "3",
//     colour: "black",
//     eat() {
//         return `${this.name} is eating.`
//     },
//     drink() {
//         return `${this.name} is drinking.`
//     }
// };
// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3
class ItemWithPrice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const coffeeShop = {
    branch: "Manchester",
    drinksWithPrices: [
        new ItemWithPrice("coffee", 3),
        new ItemWithPrice("hot chocolate", 3),
        new ItemWithPrice("orange juice", 2.5),
        new ItemWithPrice("tea", 2),
    ],

    foodWithPrices: [
        new ItemWithPrice("sandwich", 2),
        new ItemWithPrice("cake", 3),
        new ItemWithPrice("fruit", 0.8),
        new ItemWithPrice("pastry", 1),
    ],

    drinksOrdered(nameOfDrinks) {
        let orderItems = [];
        for (let i = 0; i < this.drinksWithPrices.length; i++) {
            const item = this.drinksWithPrices[i];
            if (nameOfDrinks.includes(item.name)) {
                orderItems.push(item);
            }
        }
        return orderItems;
    },
    foodOrdered(nameOfFoods) {
        let orderItems = [];
        for (let i = 0; i < this.foodWithPrices.length; i++) {
            const item = this.foodWithPrices[i];
            if (nameOfFoods.includes(item.name)) {
                orderItems.push(item);
            }
        }
        return orderItems;
    }
};
const drinkItems = coffeeShop.drinksOrdered(["tea", "coffee"])
const foodItems = coffeeShop.foodOrdered(["sandwich", "pastry"])
let totalCost = 0;

let foodAndDrinks = drinkItems.concat(foodItems);
foodAndDrinks.forEach(item => {
    totalCost += item.price;
});

console.log(`Your order is ${JSON.stringify(foodAndDrinks)} and total cost is ${totalCost}. Ordered in ${coffeeShop.branch}.`)