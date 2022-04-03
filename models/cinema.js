module.exports = (sequelize, type) => {
    return sequelize.define('cinema', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

       name: type.STRING,
       //city: type.STRING
    })
}