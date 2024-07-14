const Candy = require('./candy')

describe('Candy', () => {
    it('if I create an instance of Candy, it has the expected name: Starburst', () => {
        const testCandy = new Candy('Starburst', 15)
        expect(testCandy.name).toStrictEqual('Starburst');
    });
});

describe('Candy', () => {
    it('if I create an instance of Candy, it has the expected price: 15', () => {
        const testCandy = new Candy('Starburst', 15)
        expect(testCandy.getPrice()).toStrictEqual(15);
    });
});

