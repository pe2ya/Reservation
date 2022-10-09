module.exports = (sequelize, type) => {
    return sequelize.define('section', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        position: type.INTEGER,
        column_number: type.INTEGER,
        row_number: type.INTEGER
    })
}