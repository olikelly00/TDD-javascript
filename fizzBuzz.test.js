const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('if I input a multiple of 3, the function returns fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
       
    });
});

describe('fizzBuzz', () => {
    it('if I input a multiple of 5, the function returns buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
       
    });
});

describe('fizzBuzz', () => {
    it('if I input a number that is a multiple of 5 and 3, the function returns fizzbuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
       
    });
});

describe('fizzBuzz', () => {
    it('if I input a number that is not a multiple of 5 or 3, the function returns the original number', () => {
        expect(fizzBuzz(8)).toBe(8);
       
    });
});

describe('fizzBuzz', () => {
    it('if I input something that is not a number, the function throws an error message', () => {
        expect(() => fizzBuzz("Dog")).toThrow("This can only handle numbers");
       
    });
});