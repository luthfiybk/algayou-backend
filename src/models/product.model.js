const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        product_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        uuid: {
            type: DataTypes.STRING
        },
        product_name: {
            type: DataTypes.STRING
        },
        product_price: {
            type: DataTypes.FLOAT
        },
    })

    return Product
}