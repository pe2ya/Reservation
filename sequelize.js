

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sqlite://db.sqlite')

const UserModel = require('./models/user')
const CinemaModel = require('./models/cinema')
const GenreModel = require('./models/genre')
const MovieModel = require('./models/movie')
const RoleModel = require('./models/role')
const SeanceModel = require('./models/seance')
const SeatModel = require('./models/seat')
const SectionModel = require('./models/section')

const User = UserModel(sequelize, Sequelize)
const Cinema = CinemaModel(sequelize, Sequelize)
const Genre = GenreModel(sequelize, Sequelize)
const Movie = MovieModel(sequelize, Sequelize)
const Role = RoleModel(sequelize, Sequelize)
const Seance = SeanceModel(sequelize, Sequelize)
const Seat = SeatModel(sequelize, Sequelize)
const Section = SectionModel(sequelize, Sequelize)
const MovieGenre = sequelize.define('movie_genre', {})

Movie.belongsToMany(Genre, { through: MovieGenre, unique: false })
Genre.belongsToMany(Movie, { through: MovieGenre, unique: false })
//User.belongsTo(Role)
Seance.belongsTo(Movie)
Seance.belongsTo(Cinema)
Seat.belongsTo(Section)
Section.belongsTo(Cinema)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    User,
    Cinema,
    Genre,
    Movie,
    Role,
    Seance,
    Seat,
    Section,
    MovieGenre
}

