
module.exports = (sequelize, type) => {
    return sequelize.define('chat', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          text: {
            type: type.STRING,
            allowNull: false,
          },
          user_id: type.INTEGER,
          time: type.STRING,
    })
}