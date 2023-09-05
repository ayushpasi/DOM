//EXAMIN THE DOCUMENT OBJECT//
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// const headTitle = document.getElementById("main-header");
//headTitle.textContent = "hello";//style not matters
//headTitle.innerText = "Hello";//style matters
//headTitle.innerHTML = "<h3>H3</h3>";
//headTitle.style.borderBottom = "5px solid black";

// const addItem = document.getElementById("addItem");
// addItem.style.fontWeight = "bold";
// addItem.style.color = "green";

// Write the code as per the youtuber does
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].style.textContent = "hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// // give console.error();
// // items.style.backgroundColor="grey"

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
//   items[i].style.fontWeight = "bold";
// }
// items[2].style.backgroundColor = "green";

// var newItem = document.getElementsByTagName("li");
// newItem[4].style.backgroundColor = "yellow";
// newItem[4].textContent = "getElementByTagName";

// //QUERYSELECTOR//
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px black";

// var input = document.querySelector("input"); //only selects the first one
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";
// secondItem.style.backgroundColor = "green";

// //QUERY SELECTOR ALL//
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

// Make the 2nd item have green background color
// Make the 3rd item invisible
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display = "none";
// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL
var sItem = document.querySelectorAll("li");
sItem[1].style.color = "green";
var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
