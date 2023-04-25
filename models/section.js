module.exports = (sequelize, type) => {
    return sequelize.define('section', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        position: {
            type: type.INTEGER
        },
        
        column_number: {
            type: type.INTEGER
        },

        row_number: {
            type: type.INTEGER
        },
    })
}