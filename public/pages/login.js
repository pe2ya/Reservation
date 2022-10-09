//login pop up form 
var LoginCansel = document.querySelector("#login-cansel");
var LoginFComfirm = document.querySelector("#login-comfirm");
var LoginForm = document.querySelector("#login-form");
var ShowLogin = document.querySelector("#show-login");

//login form inputs
var InputUsername = document.querySelector("#user-login");
var InputUserpassw = document.querySelector("#user-passw");

//header
var header = document.querySelector("header");

//showing login form
ShowLogin.onclick = function () {
    LoginForm.classList.add("active");
}

//adding shadow to nav when page scroll down
window.onscroll = function() {
    header.className = (this.scrollY < 10) ? "" : "shadow";
}

//hidding login form
LoginForm.addEventListener("mousedown", function(event) {
    if(!event.target.closest(".form-content"))
        this.classList.remove('active');
}, false)