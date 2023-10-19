const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'algayou',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql',
        port: 8889,
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('../models/users.model')(sequelize, Sequelize)
db.roles = require('../models/roles.model')(sequelize, Sequelize)
db.address = require('../models/address.model')(sequelize, Sequelize)
db.orders = require('../models/orders.model')(sequelize, Sequelize)
db.product = require('../models/product.model')(sequelize, Sequelize)
db.order_status = require('../models/order_status.model')(sequelize, Sequelize)
db.payment_method = require('../models/payment_method.model')(sequelize, Sequelize)

// db.users.hasMany(db.address, {foreignKey: 'uuid'})
// db.address.belongsTo(db.users, {foreignKey: 'uuid'})

// db.users.hasMany(db.orders, {foreignKey: 'uuid'})
// db.orders.belongsTo(db.users, {foreignKey: 'uuid'})

// db.orders.hasMany(db.product, {foreignKey: 'product_id'})
// db.product.belongsTo(db.orders, {foreignKey: 'order_id'})

module.exports = db