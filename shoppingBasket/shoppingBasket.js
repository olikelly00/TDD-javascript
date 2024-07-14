const Candy = require('./candy')

class shoppingBasket {
    constructor(items = [], totalPrice = 0) {
        this.items = items;
        this.totalPrice = totalPrice;
        
    }

    getItems() {
        return this.items
    }

    getTotalPrice() {
        return this.totalPrice
    }

    addItem(item) {
        this.items.push(item)
        this.totalPrice += item.price
        return this.items
    }

    removeChosenItem(item) {
        this.totalPrice -= item.price
        this.items.pop(this.items.indexOf(item))
        return this.items
        
    }
    
    applyDiscount(percentage) {
        let discount = this.totalPrice * (percentage/100)
        this.totalPrice -= discount
        return this.shoppingBasket

    }

}

const candy = new Candy('Mars', 4.99);

console.log(candy.getName())

console.log(candy.getPrice())

const basket = new shoppingBasket();

console.log(basket.getTotalPrice());


basket.addItem(candy);

console.log(basket.getTotalPrice());


basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());



module.exports = shoppingBasket;
