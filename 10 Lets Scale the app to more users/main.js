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

  // Log the data stored in local storage for the given email
  console.log(localStorage.getItem(email));
}
