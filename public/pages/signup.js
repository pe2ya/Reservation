// Get DOM elements
var form = document.querySelector('#form');
var login = document.querySelector('#login');
var password = document.querySelector('#password');
var cpassword = document.querySelector('#cpassword');
var submit = document.querySelector('#submit');

// Function to send data to the server
function SendData() {
  var httpRequest = new XMLHttpRequest();

  // Get input values and remove leading/trailing whitespaces
  var login_input = login.value.trim()
  var password_input = password.value.trim()
  var cpassword_input = cpassword.value.trim()

  // Check if all required fields are filled in
  if (!login_input || !password_input || !cpassword_input) {
    alert("Please fill in all required fields.");
    return;
  }

  // Check if passwords match
  if (password_input !== cpassword_input) {
    alert("Passwords do not match.");
    return;
  }

  // Create object with input values
  var obj = {
    login: login_input,
    password: password_input,
    cpassword: cpassword_input
  };

  // Handle server response
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 400) {
            var data = JSON.parse(this.responseText)
            alert(data.message);
            password.innerHTML = "";
            cpassword.innerHTML = "";
        }

        if (this.status == 200)
        {
          var data = JSON.parse(this.responseText)
          window.location.href = data.message;
        }
    }
  };

  // Send POST request to server with JSON data
  httpRequest.open('POST', '/api/user/signup',);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(obj));
}

// Attach event listener to form submit
form.onsubmit = () => {
    SendData();
    return false;
};

