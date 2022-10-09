//class which contains all information for draw an element
function Template(name, template, defaultp, pprice, ppprice) {
    this.name = name;
    this.template = template;
    this.defaultp = defaultp;
    this.pprice = pprice;
    this.ppprice = ppprice;
}

//class with section of seats params: array of elements, elements in row, elements in column 
function Section(section, columnN, rowN) {
this.section = section;
this.columnN = columnN;
this.rowN = rowN;
}

//deserialize Json string to obj, cuz js can't do this (with classes)
function JsonToObj(json){
    var obj = JSON.parse(json);
    var sectionArray = [];
    obj.template.forEach((s) =>{

        var section = new Section(s.section, s.columnN, s.rowN);
        sectionArray.push(section);
    });
    obj.template = sectionArray;

    return obj;
}

//appending "element" to some html element
//also i add oppoetunity to insert numbers into "element" (using for showing template)
//attribute data hover i use for show number only on hover
function AppendELement(cont, name, num, bool, id) {
    var el = document.createElement("div");
    el.className = "element";

    if(num){
        
        if(bool) 
        {
            el.setAttribute("data-hover", num)
        }
        else  
        {
            el.innerHTML = num
        }
    }

    if(name) 
    {
        el.classList.add(name)
    }
    
    if(id) {
        el.setAttribute("id", id);
    }

    cont.appendChild(el);
}

//creating a price list group for template
function EnterPrice(obj) {
    var names = [false, "premium", "premium-plus", "reserved"];
    var pr = [obj.defaultp, obj.pprice, obj.ppprice, "reserved"];

    var result =  document.createElement("div");
    var appen = document.createElement("div");
    
    result.className = "price-group";
    appen.className = "price";

    names.forEach((value, i) => {
        var a = appen.cloneNode(false);
        AppendELement(a, value, false, false, false);
        
        a.innerHTML += "- " + pr[i];
        result.append(a);
    });
    
    return result; 
}

//a little weird func :)
//based on object data func draws a seats template and places it into another template of divs 
//in the end we get completely ready for usage item
function ShowTemplate(obj, id) {

    var area = document.querySelector("#" + id);
    var tempcontainer = document.createElement("div");
    var tempName = document.createElement("h1");
    var tempSeats = document.createElement("div");
    var holder = document.createElement("div");
    var container2 = document.createElement("div");
    
    tempcontainer.className = "template-container";
    tempSeats.className = "template-seats";
    holder.className = "template-info";
    container2.className = "auto-fill";
    
    area.innerHTML = "";
    tempName.innerHTML = obj.name;
    tempcontainer.appendChild(tempName);

    var sectionArray = obj.template;
    let rn = 1;
    
    sectionArray.forEach((s) =>{
        var ts = tempSeats.cloneNode(false);
        var autoFill = container2.cloneNode(false);
        var seats = container2.cloneNode(false);

        let seatN = 1;
        let nl = 0;

        s.section.forEach((el) =>{
            if(nl % s.columnN == 0)
            {
                nl = 0;
                seatN = 1;
            }
            let status = el.status;
            let id = el.id;
            switch(status){
                case 0:
                    AppendELement(autoFill, false, seatN, true, id);
                    break;
                case -1:
                    AppendELement(autoFill, "empty", false, true, id);
                    break;
                case 1:
                    AppendELement(autoFill, "premium", seatN, true, id);
                    break;
                case 2:
                    AppendELement(autoFill, "premium-plus", seatN, true, id);
                    break;
                case 10:
                    AppendELement(autoFill, "reserved", seatN, true, id);
                    break;
            }
            if(status != -1) {
                seatN++;
            }

            if(nl == 0)
            {
                AppendELement(seats, "empty", rn, false, false);
                rn++;
            }

            nl++;
        });
        seats.setAttribute("style", "grid-template-columns: 1");
        autoFill.setAttribute("style", "grid-template-columns: repeat(" + s.columnN + ", auto)");
        ts.appendChild(seats.cloneNode(true));
        ts.appendChild(autoFill);
        ts.appendChild(seats);
        holder.appendChild(ts);
    });
    tempcontainer.appendChild(holder)
    tempcontainer.appendChild(EnterPrice(obj));
    area.appendChild(tempcontainer);
}


(function(exports){

    exports.GetObj = function(json){
         JsonToObj(json);
    };
  
  }(typeof exports === 'undefined' ? this.share = {} : exports));
