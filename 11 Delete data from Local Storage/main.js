// Get the form element by its ID
var form = document.getElementById("my-form");

// Add a submit event listener to the form
form.addEventListener("submit", saveData);

// Function to handle form submission
function saveData(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values from the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  // Create an object to store the user data
  var dataObj = {
    name: name,
    email: email,
    mobile: mobile,
  };

  // Convert the data object to a JSON string
  var data = JSON.stringify(dataObj);

  // Store the JSON data in local storage with the email as the key
  localStorage.setItem(email, data);

  // Get the "users" ul element
  var user = document.getElementById("users");

  // Create a new list item element
  var li = document.createElement("li");

  // Add a class "item" to the list item
  li.className = "item";

  // Create a text node with user data and append it to the list item
  li.appendChild(
    document.createTextNode(name + " - " + email + " - " + mobile)
  );

  // Create a delete button element
  var btn = document.createElement("button");

  // Add a class "delete" to the button
  btn.className = "delete";

  // Add text "delete" to the button
  btn.appendChild(document.createTextNode("delete"));

  // Add a click event listener to the delete button
  btn.addEventListener("click", removeUser);

  // Append the delete button to the list item
  li.appendChild(btn);

  // Append the list item to the "users" ul
  user.appendChild(li);

  // Log the data stored in local storage for the given email
  console.log(localStorage.getItem(email));

  // Function to remove a user when the delete button is clicked
  function removeUser(e) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentNode;
      user.removeChild(li);
      var emailDelete = findEmail(li);
      localStorage.removeItem(emailDelete);
    }
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
}
function findEmail(li) {
  var text = li.textContent;
  var parts = text.split(" - ");
  if (parts.length > 1) {
    return parts[1].trim();
  }
  return null;
}
