const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const fs = require('fs');
const Temp = require('./public/template.js');
const app = express();
const port = 80;

const { 
    User,
    Cinema,
    Genre,
    Movie,
    Role,
    Seance,
    Seat,
    Section,
    MovieGenre,
    Session
} = require('./sequelize');

const {
    Getcookies,
    GetcookieByName
} = require('./methods/cm')

const {
    SetSession,
    DeleteSession,
    CreateSession,
    CharChain
 } = require('./methods/sm')

const { 
    CreateCinema,
    CreateSection,
    CreateSeat,
    GetAllCinemas,
    GetTemplate,
    GetSeatArray,
    RecervedSeat,
    sleep,
    GetAllMessages,
    CreateMessage,
} = require('./methods/dbm');

const {
    AddGenre,
    GetGenreId,
    CreateMovie,
    GetMovieId,
    CreateSeance,
    GetSeanceId
} = require('./methods/mom.js')

const {
    LogIP
} = require('./methods/lm')

app.set('trust proxy', true)
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));


app.get('/', async (req, res) => {

    // await LogIP("./login_log.dat")
    res.render("index");
});

app.get('/list', (req, res) => {

    res.render("text");
});

app.get('/cinema/', (req, res) => {

    res.render("theater");
});

app.get('/home', (req, res) => {

    res.render("home");
});

app.get('/signup', (req, res) =>{

    res.render("signup", {text: ""});
})
 
app.get('/api/theater/list', async (req, res) => {
    var cinemas = await GetAllCinemas();
    res.json(cinemas);
    console.log("send");
});

app.get('/api/theater/:id', async (req, res) => {
    var obj = await GetTemplate(req.params.id);

    if(obj) 
    {
        res.json(obj)
    } 
    else  
    {
        res.redirect('/'); 
    }
});

app.post('/messages/get', async (req, res) => {

    var id = req.body.id;
    messages = await GetAllMessages(id);

    res.send(messages);
  });
  
  app.post('/messages/create', async (req, res) => {

    var text = req.body.text;
  
    CreateMessage(text, null);
  });


app.post('/api/theater/reservation/:seat', async (req, res) => {
    var cookie =  GetcookieByName(req, "session");
    var data;

    if(!cookie) {
        data = {
            text: "You need log in at first"
        }
    }
    else
    {
        let count = await Session.count({
            where: {
                value: cookie,
                loggined: true
            } 
        })

        if(count > 0)
        {
            var session = await Session.findOne({
                where: {
                    value: cookie,
                    loggined: true
                } 
            })
            await RecervedSeat(req.params.seat, true, session.user_id);
        }
        else
        { 
            data = {
                text: "You need log in at first"
            }
            
        }
    }

    if(data) {
        res.render("signup", data)
        console.log("User not recognised")
    }
});

app.get('/api/user', );

app.post('/api/theater/save', async (req, res) => {
    var obj = req.body;

    var _cinema  = await CreateCinema(obj);
    console.log(_cinema)

    obj.template.forEach( async (section, index) => {
        var _section = await CreateSection((index + 1), _cinema.id, section);
        console.log(_section)

        section.section.forEach( async (seat, index) => {
            var _seat = await CreateSeat((index + 1), seat.status, _section.id)
            console.log(_seat)
        })
    })
});

app.post('/api/user/login', async (req, res) => {

    var login = req.body.login
    var password = req.body.password

    User.count({where: {login: login, password: password}}).then(function(c){
        if(c > 0)
        {
            User.findOne({where: {login: login, password: password}}).then(async (user) => {
                var cookie =  GetcookieByName(req, "session");
                
                var session = await SetSession(user, cookie);
                res.cookie("session", session.value, {
                    httpOnly: false
                  });
                //   console.log({session})
                res.render("signup", {text: "Hi " + user.login + "<br>loggined: " + session.loggined})
            })
        }
        else
        {
            res.render("signup", {text: "Failed"});
        }
    })
});


app.post("/api/user/signup", (req, res) =>{

    var data = req.body

    var name = data.login
    var passw = data.password
    var cpassw = data.cpassword

    if (passw === cpassw) {
        User.create({
            login: name,
            password: passw,
            role: "user"
          })
          .then(user => {
            console.log(user)
            var response = {
                message: "/"
            }
            res.status(200).json(response);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error");
          });
      } else {
        var response = {
          message: "Passwords do not match"
        }
        return res.status(400).json(response);
      }
});

app.get('/api/user/logout', async (req, res) => {
    var cookies = GetcookieByName(req, "session");
    DeleteSession(cookies);
    res.redirect('/');
})

app.listen(port, () => {
    console.log("On port: " + port)
});
