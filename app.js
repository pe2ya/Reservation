const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();
const port = 22106;

const { 
    User,
    Cinema,
    Genre,
    Movie,
    Role,
    Seance,
    Seat,
    Section,
    MovieGenre
} = require('./sequelize')


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/check", (req, res) => res.json(["yes", "no", "may be"]));
app.get('/ttt', (req, res) => {
    res.render("text");
});

app.get('/home', (req, res) => {
    res.render("home");
});

app.get('/signup', (req,res) =>{
    res.render("signup", {text: ""});
})



app.get('/cinema/:id', (req, res) => res.send('cinema has id ' + req.params.id));

app.get('/api/theater/list', );

app.get('/api/theater/:id', );

app.post('/api/theater/:id/reservation/:seat', );

app.get('/api/user', );

app.post('/api/user/login', (req, res) => {

    var login = req.body.login
    var password = req.body.password

    User.count({where: {login: login, password: password}}).then(function(c){
        if(c > 0)
        {
            User.findOne({where: {login: login, password: password}}).then((user) =>   {
                res.cookie("userID", user.id);
                console.log(user);
                res.render("signup", {text: "Hi " + user.login})
            })
        }
        else
        {
            res.render("signup", {text: "Failed"});
        }
    })
});


app.post("/api/user/signup", (req, res) =>{

    var name = req.body.login
    var passw = req.body.password
    var cpassw = req.body.cpassword

    if(passw === cpassw)
    {
        User.create({
                login: name,
                password: passw,
                role: "user"
            })
            .then(user => console.log(user))
    }
    else
        console.log("passwords are not same")

    res.redirect('/');
});

app.get('api/user/logout', (req, res) => {
    res.clearCookie();
    res.redirect('/');
})

app.listen(port, () => console.log("On port: " + port));