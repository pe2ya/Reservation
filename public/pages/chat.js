var form = document.querySelector('#form');
var hidden = document.querySelector('#hid_inp');
var text = document.querySelector('#text');
var msg_container = document.querySelector('#container');

function LoadMessages() {
  var httpRequest = new XMLHttpRequest();
  var obj = {
    id: hidden.value,
  };

  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var messages = JSON.parse(this.responseText);
      console.log(this.responseText);

      if (messages.length >= 1) {
        messages.forEach((msg) => {
          var div = document.createElement('div');
          div.className = 'msg-item';

          div.innerHTML = msg.text;
          msg_container.appendChild(div);
        });

        var id = messages[messages.length - 1].id;
        hidden.setAttribute('value', id);
      }
    }
  };
  httpRequest.open('POST', '/messages/get');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(obj));
}

function SendMessages() {
  var httpRequest = new XMLHttpRequest();
  var msg = text.value.trim()
  var obj = {
    text: msg,
  };

  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  httpRequest.open('POST', '/messages/create');
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(obj));
}

form.onsubmit = () => {
    var msg = text.value.trim()
    if(msg.length == 0) return false
    
    SendMessages();
    text.value = '';

  return false;
};

function start() {
  intervalID = setInterval(() => LoadMessages(), 1000);
}

function stop() {
  clearInterval(intervalID);
}

var intervalID;
LoadMessages();
start();
