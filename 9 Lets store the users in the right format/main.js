var form = document.getElementById("my-form");

form.addEventListener("submit", saveData);

function saveData(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var dataObj = {
    name: name,
    email: email,
  };
  var data = JSON.stringify(dataObj);
  localStorage.setItem("data", data);
  console.log(localStorage.getItem("data"));
}
