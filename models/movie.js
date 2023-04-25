module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

       name: {
        type: type.STRING
       },

       age_bracket: {
        type: type.INTEGER
       },

       duration: {
        type: type.INTEGER
       },

       description:{
        type: type.STRING
      }
    })
}