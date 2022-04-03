module.exports = (sequelize, type) => {
    return sequelize.define('seance', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: type.STRING
    })
}