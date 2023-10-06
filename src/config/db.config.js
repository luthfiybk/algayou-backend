import {Sequelize} from "sequelize";

const db = new Sequelize('algayou', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;