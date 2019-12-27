/** OVERVIEW: This code is based on a game children play in England where they count from 1 to 100. The catch is that for
 *            every multiple of 3, you say "Fizz". For every multiple of 5, you say "Buzz". For every multiple of 3 & 5, 
 *            you say "FizzBuzz".
 * 
 *  Note: This code written in the google chrome developer snippet.
 */

// Instance variables
var fizzBuzzArr = [];

// Method for allocating elements into the FizzBuzz array
for(var i=1; i <= 100; i++) {
 
    if( (i%3 == 0) && (i%5 == 0) ){
        fizzBuzzArr.push("FizzBuzz");
    }
    else if( i%3 == 0 ){
        fizzBuzzArr.push("Fizz");
    }
    else if( i%5 == 0 ){
        fizzBuzzArr.push("Buzz");
    }
    else {
        console.log(i);
        fizzBuzzArr.push(i);
    }
}

// Informing the elements to the user
console.log("The elements in your FizzBuzz array are:\n\n");
console.log(fizzBuzzArr);
