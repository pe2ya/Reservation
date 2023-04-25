const { 
    Genre,
    Movie,
    Role,
    Seance
} = require('../sequelize');

async function AddGenre(name) {
    var result;
    await Genre.create({
        name: name
    })
    .then(genre => {
        result = genre;
    })

    return result;
}

async function GetGenreId(name)
{
    var result;

    await Genre.findOne({
        where: {
            name: name
        }
    })
    .then(genre => {
        result = genre.id
    })

    return result;
}

async function CreateMovie(obj)
{
    var result;

    await Movie.create({
        name: obj.name,
        age_bracket: obj.age_bracket,
        duration: obj.duration,
        description: obj.description
    })
    .then(section => {
        result = section;
    })

    return result;
}

async function GetMovieId(name)
{
    var result;

    await Movie.findOne({
        where: {
            name: name
        }
    })
    .then(el => {
        result = el.id
    })

    return result;
}

async function CreateSeance(obj)
{
    var result;

    await Seance.create({
        date: obj.date,
        MovieId: obj.movie_id,
        CinemaId: obj.cinema_id,
    })
    .then(el => {
        result = el;
    })

    return result;
}

async function GetSeanceId(date, movie_id, cinema_id)
{
    var result;

    await Seance.findOne({
        where: {
            date: obj.date,
            MovieId: obj.movie_id,
            CinemaId: obj.cinema_id,
        }
    })
    .then(el => {
        result = el.id
    })

    return result;

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
    AddGenre,
    GetGenreId,
    CreateMovie,
    GetMovieId,
    CreateSeance,
    GetSeanceId,
    GetAllMessages,
    CreateMessage
};