// Exception kinds

// RangeError
// Invoked when a numeric variable exceeds the allowed range
const specificArray = new Array(4);
console.log(specificArray);
// Output: Undefined x4

const malfunctionArray = new Array(-2);
// Output: RangeError: Invalid array length in

// SyntaxError
// Becomes active when we suffer a syntax error while parsing
// JS code.
// function makeCalculation(){
    console.log('The result is being processed...');
// Missing function closing brackets "}".

// ReferenceError
// Its invoked when we use an invalid reference
const myName = 'JSCoder';
//console.log(myNamee);
// Output: ReferenceError: MyNamee is not defined

// EvalError
// It appears when the eval() function is used incorrectly

// TypeError
// Invoked when a variable type is different from planned
// during functions uses, for example.
const carModel = "Sedan";
// carModel.toFixed();
// The "toFixed()" method is used for int type variables (Numbers)
// Output: Uncaught TypeError: carModel.toFixed is not a function

// URIError
// It appears when decodeURI() or incodeURI() functions
// are used incorrectly
decodeURI('https://youtube.com%');
// Output: Uncaught URIError: URI malformed(...)