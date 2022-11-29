/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;
let priceInIDR;

const currency = new Map([
    [key = "USD", value = 14000],
    [key = "JPY", value = 131],
    [key = "SGD", value = 11000],
    [key = "MYR", value = 3500]
    ]
);

// TODO
console.log(currency)
console.log(priceInJPY)
console.log(priceInIDR = priceInJPY * currency.get("JPY"))


/**
 * Jangan hapus kode di bawah ini
 */
module.exports = {currency, priceInJPY, priceInIDR};
