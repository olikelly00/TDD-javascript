const searchCandies = require('./searchCandies')

const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];



describe('searchCandies', () => {
    it('if I input Ma and 10, it will return an array containing Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10, candies)).toStrictEqual(['Mars', 'Maltesers']);
    });
});


describe('searchCandies', () => {
    it('if I input Ma and 2, it will return an array containing Mars', () => {
        expect(searchCandies('Ma', 2, candies)).toStrictEqual(['Mars'])
    });
});


describe('searchCandies', () => {
    it('if I input S and 10, it will return an array containing Skitties, Skittles and Starburst', () => {
        expect(searchCandies('S', 10, candies)).toStrictEqual(['Skitties', 'Skittles', 'Starburst'])
    });
});



describe('searchCandies', () => {
    it('if I input S and 4, it will return an array containing Skitties and Skittles', () => {
        expect(searchCandies('S', 4, candies)).toStrictEqual(['Skitties', 'Skittles'])
    });
});

describe('searchCandies', () => {
    it('if I input s and 4, it will return an array containing Skitties and Skittles', () => {
        expect(searchCandies('s', 4, candies)).toStrictEqual(['Skitties', 'Skittles'])
    });
});

describe('searchCandies', () => {
    it('if I input ma and 10, it will return an array containing Mars and Maltesers', () => {
        expect(searchCandies('ma', 10, candies)).toStrictEqual(['Mars', 'Maltesers'])
    });
});