//TRAVERSING THE DOM//
var itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);
//parentNode and parentElement are interChangable

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // //firstChild useless
// // console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// lastChild useless
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling useless
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//CREATEELEMENT//
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

// add attribue
newDiv.setAttribute("title", "hello div");

//create text node
var newDivText = document.createTextNode("HEllo");
//add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);

var textNode = document.createTextNode(" HEllo");
var span = document.createElement("span");
span.appendChild(textNode);
var li = document.querySelector("li");
li.parentElement.insertBefore(span, li);
