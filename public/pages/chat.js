// Get DOM elements
var form = document.querySelector('#form');
var hidden = document.querySelector('#hid_inp');
var text = document.querySelector('#text');
var msg_container = document.querySelector('#container');

// Function to load messages
function LoadMessages() {
  var httpRequest = new XMLHttpRequest();
  var obj = {
    id: hidden.value,
  };

  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4) {
      if(this.status == 200) {
        var messages = JSON.parse(this.responseText);
        console.log(this.responseText);

        // If there are messages
        if (messages.length >= 1) {
          messages.forEach((msg) => {

            // Create a div for each message and add it to the container
            var div = document.createElement('div');
            div.className = 'msg-item';

            div.innerHTML = msg.text;
            msg_container.appendChild(div);
          });

          // Update the hidden input value to the last message's ID
          var id = messages[messages.length - 1].id;
          hidden.setAttribute('value', id);
        }
      }
    }
  };
  httpRequest.open('POST', '/messages/get');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(obj));
}

// Send a POST request to get messages
function SendMessages() {
  var httpRequest = new XMLHttpRequest();
  var msg = text.value.trim()
  var obj = {
    text: msg,
  };

  // Function to send a new message
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };

  // Send a POST request to create a new message
  httpRequest.open('POST', '/messages/create');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(obj));
}

// Event listener for form submit
form.onsubmit = () => {
    var msg = text.value.trim()

    // Check if the message is empty
    if(msg.length == 0) return false
    
    SendMessages();
    text.value = '';

  return false;
};

// Function to start interval for loading messages
function start() {
  intervalID = setInterval(() => LoadMessages(), 1000);
}

// Function to stop interval for loading messages
function stop() {
  clearInterval(intervalID);
}

// Load messages and start interval for loading messages
var intervalID;
LoadMessages();
start();
