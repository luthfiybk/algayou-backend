const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
        order_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        uuid: {
            type: DataTypes.STRING
        },
        order_date: {
            type: DataTypes.DATEONLY
        },
        order_status: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.FLOAT
        },
        product: {
            type: DataTypes.STRING
        },
        payment_method: {
            type: DataTypes.STRING
        }
    })
}