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

const items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].style.textContent = "hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
// give console.error();
// items.style.backgroundColor="grey"

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "grey";
  items[i].style.fontWeight = "bold";
}
items[2].style.backgroundColor = "green";
