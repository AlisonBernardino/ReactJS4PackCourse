// DOM class - 01/17/2022
// Block 03 - JS file created

// Topics to cover:

// DOM meaning and daily use

// Meaning = DOM (Known as Document Object Model)
// is an API (Application Programming Interface)
// used to configure the logical structure of
// XML and HTML documents. It also can configure
// the document access and manipulation.

// Daily Use = We use DOM interactions to build,
// change and handle HTML behavior during FrontEnd
// apps development or similar tasks on developer
// daily missions.

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
function captureText() {
    var capturedData = document.querySelector('#querySelectorInfo').value;

    alert(capturedData);
}

// Block 10B
// => InnerHTML
function insertDataIntoHTML() {
    var innerHTMLData = document.querySelector('#innerHTMLInfo').value;

    document.querySelector('#outputData').innerHTML = innerHTMLData;
}

// Block 11B
// => textContent
var titleElement = document.querySelector("h4");

// TextNode = Function to create a text point with specified text data.
var outputText = document.createTextNode("Text node sample text");

// appendChild = This function inserts a new "child/inferior" element inside
// the "father/superior" element,
// and the function complements the DOM element creation.
titleElement.appendChild(outputText);

titleElement.textContent = "New text inserted successfully!";

// Block 13B 
// Handling HTML attributes
// setAttribute
document.getElementById("setButton").addEventListener("click",function(){
    document.getElementById("attributeHandlingTitle").setAttribute("class","redColor");
});

// getAttribute
document.getElementById("getButton").addEventListener("click", function(){
    var capturedValue = document.getElementById("attributeHandlingTitle").getAttribute("class");
    document.getElementById("attributeHandlingClass").innerHTML = capturedValue;
});

// removeAttribute
document.getElementById("removeButton").addEventListener("click", function(){
    document.getElementById("attributeHandlingTitle").removeAttribute("class");
});