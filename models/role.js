module.exports = (sequelize, type) => {
    return sequelize.define('role', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        constructor: {
            type: type.BOOLEAN
          },
    })
}