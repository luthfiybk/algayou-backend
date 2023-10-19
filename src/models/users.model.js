const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "customer"
        }
    })

    return Users
}