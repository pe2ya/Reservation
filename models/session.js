module.exports = (sequelize, type) => {
    return sequelize.define('session', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: type.INTEGER,
        value: type.STRING,
        loggined: type.BOOLEAN
    })
}