module.exports = (sequelize, type) => {
    return sequelize.define('seat', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        num: {
            type: type.INTEGER
        },

        status: {
            type: type.INTEGER
        },

        reserved: {
            type: type.BOOLEAN
        },

        user_id: {
            type: type.INTEGER,
            defaultValue: null
        }
    })
}