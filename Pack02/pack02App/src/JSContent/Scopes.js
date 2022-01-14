// This will throw an error
// because we are dealing with
// a 'const' variable.
const anObject = {};
anObject.name = 'JSCoder';

anObject = { name: 'JavaCoder'};


// Variable shadowing

let userAge1 = 15;
let userAge2 = 17;

function checkOfficialAge(){
    userAge1 = 16;
    let userAge2 = 18;
}

checkOfficialAge();
console.log(userAge1);
console.log(userAge2);




