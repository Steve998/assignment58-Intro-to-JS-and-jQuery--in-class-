// create a function that will greet a person,
// and assign the function to the `greet` variable
var greet = function( person, message ) {
  var greeting = 'Hello, ' + person + '!';
  console.log( greeting + ' ' + message );
};

// use the function to greet Jory, passing in her
// name and the message we want to use
greet( 'Jory', 'Welcome to JavaScript' );

// use the function to greet Rebecca, passing in her
// name and a different message
greet( 'Rebecca', 'Thanks for joining us' );


// create a function to add two numbers and return a result
var addTwoNumbers = function(a, b) {
  return a + b;
};

console.log(addTwoNumbers(100,4));


// Functions and variable scope
var foo = 'qux';
var myFunction = function() {
  var foo = 'bar';
};

console.log( foo ); // logs 'qux'
myFunction();
console.log( foo ); // still logs 'qux'


// Variables not assigned using the 'var'
var person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function() {
    console.log( 'Hi, ' + this.firstName );
  }
};

person.firstName = 'Ben';
person.lastName = 'Alman';

console.log( 'First name: ' + person.firstName );
console.log( 'Last name: ' + person.lastName );
person.greet( person.firstName);


// Array stuff and the for loop
var myArray = [ 'a', 'b', 'c' ];
var i;
var len = myArray.length;

// we'll use the variable i as our index; it starts at 0,
// and we increment it by 1 (using i++) until i is no longer
// less than the length of the array
for (i = 0; i < len; i = i + 1) {
  console.log( 'item at index ' + i + ' is ' + myArray[ i ] );
};

// Adding functionality for the assignment
var notANumber = 'four' - 'five';

if ( !notANumber ) {
  // this code will run
  console.log( '!notANumber was truthy' );


}
{
  console.log( 'a' + 2 );           // 'a2'
  console.log( '4' + 3 );           // '43'
  console.log( 'five' - '4' );      // NaN (not a number)
  console.log( - '1' );             // -1
  console.log( 1 + true );          // 2
  console.log( 1 == true );         // true
  console.log( 1 === true );        // false
}
