const ShoppingBasket = require('./shoppingBasket')
// const Candy = require('./candy')

class CandyMock {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    getName() {
        return this.name
    };

    getPrice() {
        return this.price
    }
}


describe('shoppingBasket', () => {
    it('if I create an instance of ShoppingBasket, it has the expected items', () => {
        const testCandy1 = new CandyMock('Starburst', 15);
        const testCandy2 = new CandyMock('Starburst', 15);
        const testShoppingBasket = new ShoppingBasket([testCandy1, testCandy2], 30);
        expect(testShoppingBasket.getItems()).toEqual([new CandyMock('Starburst', 15), new CandyMock('Starburst', 15)]);
    });
});



describe('shoppingBasket', () => {
    it('if I add two items to my shopping basket, the total price increments each time with the new total', () => {
        const testCandy1 = new CandyMock('Starburst', 15);
        const testCandy2 = new CandyMock('Starburst', 15);
        const testShoppingBasket = new ShoppingBasket([], 0);
        testShoppingBasket.addItem(testCandy1)
        expect(testShoppingBasket.getTotalPrice()).toEqual(15);
        testShoppingBasket.addItem(testCandy2)
        expect(testShoppingBasket.getTotalPrice()).toEqual(30);
    });
});


describe('shoppingBasket', () => {
    it('if I remove two items to my shopping basket, the total price decrements each time with the new total', () => {
        const testCandy1 = new CandyMock('Starburst', 15);
        const testCandy2 = new CandyMock('Maltesers', 15);
        const testCandy3 = new CandyMock('Cadburys', 20);
        const testShoppingBasket = new ShoppingBasket([testCandy1, testCandy2, testCandy3], 50);
        testShoppingBasket.removeChosenItem(testCandy3)
        expect(testShoppingBasket.getTotalPrice()).toEqual(30);
        testShoppingBasket.removeChosenItem(testCandy2)
        expect(testShoppingBasket.getTotalPrice()).toEqual(15);
    });
});


describe('shoppingBasket', () => {
    it('if I apply a 20% discount to my shopping basket, the total Price changes to reflect this reductio', () => {
        const testCandy1 = new CandyMock('Starburst', 15);
        const testCandy2 = new CandyMock('Maltesers', 15);
        const testCandy3 = new CandyMock('Cadburys', 20);
        const testShoppingBasket = new ShoppingBasket([testCandy1, testCandy2, testCandy3], 50);
        testShoppingBasket.applyDiscount(20)
        expect(testShoppingBasket.getTotalPrice()).toEqual(40);
    });
});