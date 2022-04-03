module.exports = (sequelize, type) => {
    return sequelize.define('seance', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        date: type.DATE,
        default_price: type.INTEGER,
        premium_price: type.INTEGER,
        premium_plus_price: type.INTEGER
    })
}