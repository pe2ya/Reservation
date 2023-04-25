function Reservation(id) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
      if ( this.readyState == 4 && this.status == 200 ) {
          console.log("Success")
      }      
} 
httpRequest.open('POST', '/api/theater/reservation/' + id);
httpRequest.send();
}
  
function Ajax(id) {
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function(){

    if ( this.readyState == 4) {
        if(this.status == 200 ) {
            var template = JsonToObj(this.responseText);
            ShowTemplate(template, "test")
            
            var els = document.querySelectorAll(".element")
            els.forEach(el => {
                let res = el.className.includes("empty") || el.className.includes("reserved")
                if(!res)
                {
                    el.onclick = function() {
                        // Reservation(el.id)
                        Check(el);
                        console.log("clicked " + el.id)
                    }

                }
            })
        }
    }
} 
httpRequest.open('GET', '/api/theater/' + id);
httpRequest.send();
}

var btn = document.querySelector(".button-86");
function Check(el)
{
    el.classList.toggle("active");
    var array = document.querySelectorAll('.element.active');
    if(array.length > 0)
    {
        btn.classList.add("active")
        stop();
    }
    else
    {
        btn.classList.remove("active")
        start();
    }
}

function start(){
    intervalID = setInterval(() => Ajax(id), 2500)
}

function stop(){
    clearInterval(intervalID);
}

let params =  new URLSearchParams(window.location.search)
let id = params.get('id');
var intervalID;
Ajax(id)
start();

btn.onclick = function() {
    var session = GetcookieByName("session")

    console.log(session)
    
    if(session)
    {
        if(session.length === 200 ) {

            var array = document.querySelectorAll('.element.active');

            array.forEach(el => {
                Reservation(el.id);
                el.classList.remove("active")
            })
            btn.classList.remove("active")
            start();
        }
        else
        {
            alert("You need log in at first")
        }
    }
    else
    {
        alert("You need log in at first")
    }
}

function Getcookies() {
    var cookie = document.cookie;
    if(cookie)
    {
        var result = cookie.split('; ');
        return result
    }

    return null
}

function GetcookieByName(name)
{
    var cookies = Getcookies();
    var result;

    if(cookies)
    {
        for(let i = 0; cookies.length; i++)
        {
            el = cookies[i];
            if(el.includes(name))
            {
                var split = el.split("=");
                result = split[1];
                break;
            }
        }
    }
    return result;
}
