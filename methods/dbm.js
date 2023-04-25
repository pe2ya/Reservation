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

const { 
    consumers 
} = require('stream');

const { 
    Op 
} = require('sequelize');

async function CreateCinema(obj) {
    var result;
    await Cinema.create({
        name: obj.name, 
        default_price: obj.defaultp,
        premium_price: obj.pprice,
        premium_plus_price: obj.ppprice
    })
    .then(cinema => {
        result = cinema;
    })

    return result;
}

async function CreateSection(position, cinemaId, obj) {
 
    var result;
    await Section.create({
        position: position,
        column_number: obj.columnN,
        row_number: obj.rowN,
        cinemaId: cinemaId
    })
    .then(section => {
        result = section;
    })

    return result;
}

async function CreateSeat(num, status, sectionId) {
    var result;
    await Seat.create({
        num: num,
        status: status,
        reserved: false,
        sectionId: sectionId
    })
    .then(seat => {
        result = seat;
    })

    return result;
}

async function GetAllCinemas()
{
    var result = [];
    var array = await Cinema.findAll();

    array.forEach(cinema => {
        var obj = {
            name: cinema.name,
            id: cinema.id
        }
        result.push(obj);
    })

    return result;
}     

async function GetTemplate(id) {
    try {
        let promise = Promise.resolve()
        var cinema = await Cinema.findByPk(id);
        if (!cinema) return null;
    
        var sectionsFromDb = await Section.findAll({
            where: {
            cinemaId: cinema.id,
            },
        });
    
        await sectionsFromDb.sort((a, b) => {
            return a.position - b.position;
        });
        var sections = await GetSeatArray(sectionsFromDb);
    
        const result = {
            name: cinema.name,
            defaultp: cinema.default_price,
            pprice: cinema.premium_price,
            ppprice: cinema.premium_plus_price,
            template: sections,
        };
    
        return result;
    } catch (err) {
        console.error(err);
    }
  }
  

async function GetSeatArray(sectArray)
{
    try {
        var result = [];
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

    // await sleep(25);
    return result
    } catch (err) {
        console.error(err);
    }
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

    if (!last_id) {
        result = await Chat.findAll();
    }
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

  return result;
}

async function CreateMessage(text, id) {
  var sec = new Date().getTime();

    await Chat.create(
        {
            text: text,
            user_id: id,
            time: sec,
        }
  );
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