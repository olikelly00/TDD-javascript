module.exports = fizzBuzz;





function fizzBuzz(num) {
    if (!Number.isInteger(num)) {
        throw "This can only handle numbers";
    }
    else if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "Fizz"
    } else if (num % 5 == 0) {
        return "Buzz"
    }
    else {
        return num
    }
}


