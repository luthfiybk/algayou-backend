const { v4: uuidv4 } = require('uuid')
const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        address_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        uuid: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.INTEGER
        },
    })  

    return Address
}