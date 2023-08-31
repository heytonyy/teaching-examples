/*
  OVERFLOW (JavaScript)
  When a number is too large for JavaScript to handle, it is said to overflow.
  In JavaScript, the number type cannot represent integer values larger than 2^53.
  Attempting to do so will cause a loss of precision as demonstrated in the example below.
  The maximum safe integer in JavaScript can be determined using the MAX_SAFE_INTEGER constant.
*/

// const x = Number.MAX_SAFE_INTEGER + 1;
// const y = Number.MAX_SAFE_INTEGER + 2;
// console.log(`MAX_SAFE_INTEGER in JavaScript: ${Number.MAX_SAFE_INTEGER}`); // Expected output: 9007199254740991
// console.log(`Set x to be MAX_SAFE_INTEGER + 1: ${x}`); // Expected output: 9007199254740992
// console.log(`Set y to be MAX_SAFE_INTEGER + 2: ${y}`); // Expected output: 9007199254740992

// console.log(`Does x === y? ${x === y}`); // Expected output: Does x === y? true

// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

/*
  ROUNDING ERRORS (JavaScript)
  JavaScript uses 64-bit floating-point representation to store numbers.
  This means that some decimal numbers cannot be represented exactly.
  This can lead to rounding errors as demonstrated in the example below.
*/

let float = 0.1;
console.log(`Starting float = ${float}`); // Expected output: Starting float = 0.1

console.log(`Increase float by 0.1 ten times, float should be 1.1 after loop`);
console.log(`...`);
// Add 0.1 to float 10 times
for (let i = 0; i < 10; i++) {
  float += 0.1;
}

console.log(`Ending float = ${float}`); // Expected output: Ending float = 1.0999999999999999
