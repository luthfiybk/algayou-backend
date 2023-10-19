const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const OrderStatus = sequelize.define("order_status", {
        status_code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status_name: {
            type: DataTypes.STRING
        }
    })

    return OrderStatus
}