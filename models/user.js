module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: type.STRING,
            validate: {
                is: /^[A-Za-z0-9]{1,24}$/,
                notEmpty: true
            }
        },
        password: {
            type: type.STRING,
            validate: {
                is: /^[A-Za-z0-9]{3,24}$/,
                notEmpty: true
            }
        },

        role: {
            type: type.STRING
        }
    })
}