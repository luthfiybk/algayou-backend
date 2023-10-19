const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const PaymentMethod = sequelize.define("payment_method", {
        payment_code: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        payment_name: {
            type: DataTypes.STRING
        }
    })

    return PaymentMethod
}