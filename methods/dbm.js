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
    Session,
    Chat,
} = require('../sequelize');

const {
    SetSession,
    DeleteSession,
    CreateSession,
    CharChain
 } = require('./sm')

const {
    Getcookies,
    GetcookieByName
} = require('./cm');

const { consumers } = require('stream');

const { Op } = require('sequelize');

async function CreateCinema(obj) {
    var result;
    try {
        await Cinema.create({
            name: obj.name, 
            default_price: obj.defaultp,
            premium_price: obj.pprice,
            premium_plus_price: obj.ppprice
        })
        .then(cinema => {
            result = cinema;
        })

    } catch (err) {
        console.log(err)
    }

    return result;
}

async function CreateSection(position, cinemaId, obj) {
 
    var result;
    try {
        await Section.create({
            position: position,
            column_number: obj.columnN,
            row_number: obj.rowN,
            cinemaId: cinemaId
        })
        .then(section => {
            result = section;
        })
    
    } catch (err) {
        console.log(err)
    }

    return result;
}

async function CreateSeat(num, status, sectionId) {
    var result;
    try {
        await Seat.create({
            num: num,
            status: status,
            reserved: false,
            sectionId: sectionId
        })
        .then(seat => {
            result = seat;
        })
    
    } catch (err) {
        console.log(err)
    }

    return result;
}

async function GetAllCinemas()
{
    var result = [];

    try {
    var array = await Cinema.findAll();

    array.forEach(cinema => {
        var obj = {
            name: cinema.name,
            id: cinema.id
        }
        result.push(obj);
    })
    
    } catch (err) {
        console.log(err)
    }

    return result;
}

async function GetTemplate(id)
{
    var result; 

    try {
        var cinema = await Cinema.findByPk(id);
        let promise = Promise.resolve()
        
        if(!cinema) return null

        var sectionsFromDb = await Section.findAll({
            where:{
                cinemaId: cinema.id
            }
        })

        await sectionsFromDb.sort((a, b) => {
            return a.position - b.position
        });
        var sections = await GetSeatArray(sectionsFromDb);

        promise.then(() => {
            result = {
                name: cinema.name,
                defaultp: cinema.default_price,
                pprice: cinema.premium_price,
                ppprice: cinema.premium_plus_price,
                template: sections
            }
        })
    
    } catch (err) {
        console.log(err)
    }

    return promise.then(() => result);
}

async function GetSeatArray(sectArray)
{
    var result = [];
    try {

        await sectArray.asyncForEach(async (el) => {
            var array = [];
            var obj = {
                columnN: el.column_number,
                rowN: el.row_number
            }

            var seatsFromDb = await Seat.findAll({
                where: {
                    SectionId: el.id
                }
            })

            seatsFromDb.sort((a, b) => {
                return a.num - b.num
            });
            await seatsFromDb.forEach(seat => {
                let sStatus = seat.status;
                if(seat.reserved)
                {
                    sStatus = 10;
                }

                var seatObj = {
                    status: sStatus,
                    id: seat.id
                }
                array.push(seatObj);
            })

            obj.section = array
            result.push(obj)
        })
        
    } catch (err) {
        console.log(err)
    }

    // await sleep(25);
    return result
}

async function RecervedSeat(id, bool, userId) 
{
    try {
        await Seat.update(
            {
                reserved: bool,
                user_id: userId
            },
            { 
                where:{
                    id: id
                }
            })
            
           var seat = await Seat.findOne({
               where: {
                   id: id
               }
           }) 

           console.log(seat)
    } catch (err) {
        console.log(err)
    }
}

async function GetAllMessages(last_id = false) {
    var result;

    try {

        if (!last_id) result = await Chat.findAll();
        else {
            result = await Chat.findAll(
                {
                    where: {
                        id: { 
                            [Op.gt]: last_id 
                        }
                    },
                }
            );
        }
        
    } catch (err) {
        console.log(err)
    }

  return result;
}

async function CreateMessage(text, id) {

    try {
        var sec = new Date().getTime();

            await Chat.create(
                {
                    text: text,
                    user_id: id,
                    time: sec,
                }
        );
        
    } catch (err) {
        console.log(err)
    }
}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Array.prototype.asyncForEach = async function (callback) {
    for (let index = 0; index < this.length; index++) {
        await callback(this[index], index, this);
    }
};

module.exports = { 
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
};