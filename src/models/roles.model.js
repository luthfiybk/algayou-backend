module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        role_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: Sequelize.STRING
        }
    })

    return Role
}