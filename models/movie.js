module.exports = (sequelize, type) => {
    return sequelize.define('cinema', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

       name: type.STRING,
       age_bracket: type.INTEGER,
       duration: type.INTEGER,
       description: type.STRING
    })
}