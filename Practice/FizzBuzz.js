// You guessed it, ladies and gentleman
// FizzBuzz

// honestly doing this because I asked myself, "could i do FizzBuzz from memory" 
// my memory served that it had to do with even and odd numbers, but alas i'm wrong

// FizzBuzz
// if a number is divisible by 3, print Fizz. 
// if a number is divisible by 5, print Buzz.
// if a number is divisible by *both*, print FizzBuzz


// here goes
for (let n = 0; n < 10; n++) {
    if ((n % 3 === 0) && (n % 5 === 0)) {
        console.log("Fizz");
    } else if (n % 3 === 0) {
        console.log("Buzz");
    } else if (n % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(n);
    }
}
