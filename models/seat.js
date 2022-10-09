module.exports = (sequelize, type) => {
    return sequelize.define('seat', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        num: type.INTEGER,
        status: type.INTEGER,
        reserved: type.BOOLEAN,
        user_id: {
            type: type.INTEGER,
            defaultValue: null
        }
    })
}