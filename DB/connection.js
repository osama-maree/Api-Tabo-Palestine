const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging:false
  }
);
// sequelize.set("strictQuery", false);
const connectDB = async () => {
  return await sequelize
    .sync({ alter: true })
    .then((res) => console.log("connectDB"))
    .catch((err) => console.log("DisConnect", err));
};

module.exports = { sequelize, connectDB };
