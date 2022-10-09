module.exports = (sequelize, type) => {
    return sequelize.define('cinema', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

       name: {
           type: type.STRING
       },

       default_price: {
           type: type.INTEGER
       },

       premium_price: {
           type: type.INTEGER
       },

       premium_plus_price: {
           type: type.INTEGER
       }
    })
}