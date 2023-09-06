// Get a reference to the "addForm" and "items" elements in the HTML document
var myForm = document.getElementById("addForm");
var items = document.getElementById("items");

// Output these elements to the console for verification
console.log(myForm);
console.log(items);

// Add an event listener to the "addForm" to handle form submission
myForm.addEventListener("submit", addItem);

// Add an event listener to the "items" list to handle item removal when the delete button is clicked
items.addEventListener("click", removeItem);

// Define the function to handle adding items to the list
function addItem(e) {
  // Prevent the default form submission behavior, which would refresh the page
  e.preventDefault();

  // Get the value entered in the "item" input field
  var item = document.getElementById("item").value;

  // Create a new list item element
  var li = document.createElement("li");

  // Add the "list-group-item" class to the new list item
  li.className = "list-group-item";

  // Add the item text as a text node within the list item
  li.appendChild(document.createTextNode(item));

  // Create a delete button element
  var btn = document.createElement("button");

  // Add classes to the delete button for styling
  btn.className = "btn btn-danger btn-sm float-right delete";

  // Add the "X" text to the delete button
  btn.appendChild(document.createTextNode("X"));

  // Append the delete button to the list item
  li.appendChild(btn);

  // Append the new list item to the "items" list
  items.appendChild(li);

  // Clear the input field after adding the item
  document.getElementById("item").value = "";
}

// Define the function to handle item removal
function removeItem(e) {
  // Check if the clicked element has the "delete" class (i.e., the delete button)
  if (e.target.classList.contains("delete")) {
    // Ask for confirmation before removing the item
    if (confirm("Are you sure you want to delete this item?")) {
      // Get the parent list item and remove it from the list
      var li = e.target.parentNode;
      items.removeChild(li);
    }
  }
}
