const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port:3307,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            connectTimeout: 30000,
        },
        logging: false,
    },
);
module.exports = { sequelize };