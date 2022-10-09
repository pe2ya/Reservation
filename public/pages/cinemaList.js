function checkForm() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
  
    if ( this.readyState == 4 && this.status == 200 ) {
       var array = JSON.parse(this.responseText);
       array.forEach(el => {
  
        var theater = document.createElement("div");
        var logo = document.createElement("div");
        var text = document.createElement("div");
        var h1 = document.createElement("h1");
        var p = document.createElement("p");
        var a = document.createElement("a");
  
        theater.className = "theater";
        logo.className = "logo";
        text.className = "text";
  
        a.setAttribute("href", "/cinema/?id=" + el.id);
        h1.innerHTML = el.name;
        p.innerHTML = "description";
  
        var aa = document.querySelector("#aa")
  
        text.appendChild(h1);
        text.appendChild(p);
        a.appendChild(logo);
        a.appendChild(text);
        theater.appendChild(a);
  
        document.querySelector("#aa").appendChild(theater);
       });
    }
} 
httpRequest.open('GET', '/api/theater/list');
httpRequest.send();
}

checkForm();