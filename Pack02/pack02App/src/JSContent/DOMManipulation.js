// DOM class - 01/17/2022
// Block 03 - JS file created

// Topics to cover:


// Meaning and daily use

// Selectors + best moments for each use:
// => GetElementByID
// Example 01
// Block 05B
document.getElementById('showcase').innerHTML = 
"Welcome do DOM manipulation, JSCoder!";

// Block 06B
// => GetElementByTagName
console.log(document.getElementsByTagName('p'));

// Block 07B
// => GetElementByClassName + InnerText
var classNameElementsArray = document.getElementsByClassName('classNameExample');

// How to populate the "p" array elements 
classNameElementsArray[0].innerText = 'ClassName text 01';
classNameElementsArray[1].innerText = 'ClassName text 02';
classNameElementsArray[2].innerText = 'ClassName text 03';

// Block 08B
// => QuerySelectorAll
var querySelectorElements = document.querySelectorAll('p.querySelectorSample');
console.log(querySelectorElements);
querySelectorElements[0].innerText = 'QuerySelector sample 01';
querySelectorElements[1].innerText = 'QuerySelector sample 02';
querySelectorElements[2].innerText = 'QuerySelector sample 03';

// Block 09B 
// => QuerySelector + Value
function captureText(){
    var capturedData = document.querySelector('#querySelectorInfo').value;

    alert(capturedData);
}

// Block 10B
// => InnerHTML
function insertDataIntoHTML(){
    var innerHTMLData = document.querySelector('#innerHTMLInfo').value;

    document.querySelector('#outputData').innerHTML = innerHTMLData;
}

// Block 11B
// => textContent
var titleElement = document.querySelector("h4");
var outputText = document.createTextNode("Text node sample text");

titleElement.appendChild(outputText);

titleElement.textContent = "New text inserted successfully!";



