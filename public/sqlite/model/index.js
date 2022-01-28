const { Sequelize, DataTypes } = require('sequelize');
module.exports = {
    "user": {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        avater: {
            type: DataTypes.STRING
        }
    }
}