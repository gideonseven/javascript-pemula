const restaurant = {
    name: "Luke",
    city: "Jakarta",
    "favorite drink": "es jeruk",
    "favorite food": "bakso",
    isVegan: false
};

let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];

// TODO
console.log(restaurant);
console.log(name);
console.log(favoriteDrink);


/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { restaurant, name, favoriteDrink };