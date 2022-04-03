module.exports = (sequelize, type) => {
    return sequelize.define('section', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        position: type.INTEGER
    })
}