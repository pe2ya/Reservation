module.exports = (sequelize, type) => {
    return sequelize.define('seance', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        date: {
            type: type.DATE
        }
    })
}