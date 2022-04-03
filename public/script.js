//pages
var constructor = document.querySelector(".page.constructor");
var preview = document.querySelector(".page.preview");
var btnContainers = document.querySelectorAll(".btn-container.nb");

//create new section elements
var addbutton  = document.querySelector("#add");
var setterbuttons = document.querySelector("#set");
var title = document.querySelector("#constructor-title");

//create new section form elements
var containerBtn = document.querySelector("#create-container");
var inputWidth = document.querySelector(".width input");
var inputHeight = document.querySelector(".height input");

//area for sections in constructor
var editor = document.querySelector("#el-container");
editor.innerHTML = "";

//buttons for changing element in sections
var emptyBtn = document.querySelector("#add-empty");
var premiumBtn = document.querySelector("#add-premium");
var premiumPlusBtn = document.querySelector("#add-premium-plus");
var EditBtn = document.querySelector("#edit-section");

//array of edit buttons
var btns = [emptyBtn, premiumBtn, premiumPlusBtn, EditBtn];

//constructor comfirm pop up form
var ConstructorForm = document.querySelector("#constructor-form");
var ConstructorCansel = document.querySelector("#constructor-cansel");
var ConstructorFComfirm = document.querySelector("#constructor-comfirm");

//create template button
var createBtn = document.querySelector("#create");

//constructor form inputs
var InputNameConstr = document.querySelector("#tname");
var InputDefaultP = document.querySelector("#defaultp");
var InputPreriumPr = document.querySelector("#pprice");
var InputPremiumPlusPr = document.querySelector("#ppp");

//varialble for loops
var i;

//templates for auto fill
var container = document.createElement("div");
var element = document.createElement("div");

container.className = "auto-fill";
element.className = "element";

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

//function which save to local storage current page position;
function GetPagePosition(bool, num)
{
    if(bool)
        localStorage.page = num;

    else
        localStorage.page = 0;
}

//function which checking correct of input
//i guess better use it on server side
function GetInput(input, limit, name){
    
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(limit > 0)
    {
        let number = parseInt(input.value);

        if(Number.isInteger(number))
        {   
            if(number < 1)
            {
                alert(name + " is too low");
                return 0;
            }

            if(number <= limit)
                return number

            alert("Number is too much\n"+ name + " set to: " + limit);
            return parseInt(limit);

        }

        alert("Incorrect " + name + " value");
        return 0;
        
    }
    if(!format.test(input.value))
        return input.value

    alert("Incorrect " + name + " value");
    return false;
}

//appending "element" to some html element
//also i add oppoetunity to insert numbers into "element" (using for showing template)
//attribute data hover i use for show number only on hover
function AppendELement(cont, name, num, bool) {
    var el = element.cloneNode(true);
    if(num){
        
        if(bool) 
            el.setAttribute("data-hover", num)

        else  el.innerHTML = num
    }
    if(name)
        el.classList.add(name)

    cont.appendChild(el);
}

//adding a toggle switch class name 
//usefull for same elements with different design (by class name)
function EditMode(name) {
    var els = document.querySelectorAll(".element");

    els.forEach((el) =>{
        el.onclick = function()
        {
            if(!this.className.includes("element " + name))
                this.className = "element";

            this.classList.toggle(name);
            localStorage.backup = editor.innerHTML;
        }
    });
}

//leaves only 1 active button at same time
function SwitchBtn(btn)
{
    btns.forEach((el) =>
    {
        if(!(el === btn))
           el.className = "btn-container edit";

        else
            el.classList.add("active");
    })
}

//deserialize Json string to obj, cuz js can't do this (with classes)
function JsonToObj(json){
    var obj = JSON.parse(json);
    var sectionArray = [];
    obj.template.forEach((s) =>{
        var section = new Section(s.section, s.columnN, s.rowN);
        sectionArray.push(section);
    });

    var result = new Template(obj.name, sectionArray, obj.defaultp, obj.pprice, obj.ppprice);
    return result;
}

//creating a price list group for template
function EnterPrice(obj) {
    var names = [false, "premium", "premium-plus"];
    var pr = [obj.defaultp, obj.pprice, obj.ppprice];

    var result =  document.createElement("div");
    var appen = document.createElement("div");
    
    result.className = "price-group";
    appen.className = "price";

    names.forEach((value, i) => {
        var a = appen.cloneNode(false);
        AppendELement(a, value, false, false);
        
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
    
    tempcontainer.className = "template-container";
    tempSeats.className = "template-seats";
    holder.className = "template-info";
    
    area.innerHTML = "";
    tempName.innerHTML = obj.name;
    tempcontainer.appendChild(tempName);

    var sectionArray = obj.template;
    let rn = 1;
    
    sectionArray.forEach((s) =>{
        var ts = tempSeats.cloneNode(false);
        var autoFill = container.cloneNode(false);
        var seats = container.cloneNode(false);

        let seatN = 1;
        let nl = 0;

        s.section.forEach((el) =>{
            if(nl % s.columnN == 0)
            {
                nl = 0;
                seatN = 1;
            }
            switch(el){
                case 0:
                    AppendELement(autoFill, false, seatN, true);
                    break;
                case -1:
                    AppendELement(autoFill, "empty", false, true);
                    break;
                case 1:
                    AppendELement(autoFill, "premium", seatN, true);
                    break;
                case 2:
                    AppendELement(autoFill, "premium-plus", seatN, true);
                    break;
                case 10:
                    AppendELement(autoFill, "reserved", seatN, true);
                    break;
            }
            if(el != -1) {
                seatN++;
            }

            if(nl == 0)
            {
                AppendELement(seats, "empty", rn, false);
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

//wierd way to do nav buttons
btnContainers.forEach((value, i) =>{
    var bool;
    var idx;
    value.onclick = function () {
        if(i % 2 == 0)
        {
            preview.classList.toggle("active");
            bool = preview.className.includes("active");
            idx = -1;
        } else {
            constructor.classList.toggle("active");
            bool = constructor.className.includes("active");
            idx = 1;
        }
        GetPagePosition(bool, idx);
    }
});

//adding a new section button
addbutton.onclick = function() {
    setterbuttons.classList.toggle("active");
    title.classList.toggle("active");
}

//create group of els by inputs params button
containerBtn.onclick = function() {
    let numberOfColumns = GetInput(inputHeight, 75, "Width");
    let numberOfElements = GetInput(inputWidth, 75, "Height");

    if(numberOfElements && numberOfColumns)
    {
        var autoFill = container.cloneNode(true);
        let n = numberOfColumns * numberOfElements;

        for(i = 0; i < n; i++)
        {
            AppendELement(autoFill, false, false, false);
        }
    
        autoFill.setAttribute("style", "grid-template-columns: repeat(" + numberOfElements + ", auto)");
        editor.appendChild(autoFill);
    
        setterbuttons.classList.remove("active");
        title.classList.remove("active");
        inputWidth.value = "";
        inputHeight.value = "";

        localStorage.backup = editor.innerHTML;
    }
}

//edit buttons which changing onclick func for "elements"
emptyBtn.onclick = function() { EditMode("empty"); SwitchBtn(emptyBtn); }
premiumBtn.onclick = function() { EditMode("premium"); SwitchBtn(premiumBtn); }
premiumPlusBtn.onclick = function() { EditMode("premium-plus"); SwitchBtn(premiumPlusBtn); }
EditBtn.onclick = function() { alert("Coming soon"); }

//showing template create form
createBtn.onclick = function() {

    if(editor.innerHTML.length > 1)
        ConstructorForm.classList.add("active");

    else
        alert("At first add elements");
}

//create an object based om what you add/change in constructor
ConstructorForm.onsubmit = function () {
     
    var name = GetInput(InputNameConstr, 0, "Template name");
    var defaultp = GetInput(InputDefaultP, 1_000_000, "Default price")
    var pprice = GetInput(InputPreriumPr, 1_000_000, "Premium price");
    var ppp = GetInput(InputPremiumPlusPr, 1_000_000, "Premium plus price");

    if(name && pprice && ppp && defaultp)
    {
        var sectionArray = [];
        editor.querySelectorAll(".auto-fill").forEach((el) =>
        {
            var section = [];
            var elComStyle = window.getComputedStyle(el);
            let numberOfColumns = elComStyle.getPropertyValue("grid-template-columns").split(" ").length;
            let numberOfRows = elComStyle.getPropertyValue("grid-template-rows").split(" ").length;

            el.querySelectorAll(".element").forEach((child) =>
            {
                var classN = child.className;
                switch(classN){
                    case "element":
                        section.push(0);
                        break;
                    case "element empty":
                        section.push(-1);
                        break;
                    case "element premium":
                        section.push(1);
                        break;
                    case "element premium-plus":
                        section.push(2);
                        break;
                }
            })
            var newSection = new Section(section, numberOfColumns, numberOfRows);
            sectionArray.push(newSection);
    
        })
        var template = new Template(name, sectionArray, defaultp, pprice, ppp);
        console.log(template);
    
        localStorage.template = JSON.stringify(template);
        localStorage.backup = "";
        localStorage.page = 0;
    
        constructor.classList.remove("active");
        ConstructorForm.classList.remove("active");
    
        ShowTemplate(template, "template");
    
        editor.innerHTML = "";
        document.querySelectorAll(".form-content .container input").forEach((e) => e.value = "");

        btns.forEach((el) => el.classList.remove("active"));
    }
    return false;
}

//hidding comfirm form
ConstructorCansel.onclick = function () {
    ConstructorForm.classList.remove("active");
}

//showing login form
ShowLogin.onclick = function () {
    LoginForm.classList.add("active");
}
//localStorage creating back up if you accidentally close the tab
if(localStorage.template) {
    ShowTemplate(JsonToObj(localStorage.template), "template");
}

if(localStorage.backup) {
    editor.innerHTML = localStorage.backup;
}

if(localStorage.page) {
    switch(parseInt(localStorage.page)) {
        case -1: 
            preview.classList.add("active");
            break;
        case 1:
            constructor.classList.add("active");
            break;
    }
}
