// const { Sequelize } = require("sequelize"); //COMMON JS
import { Sequelize } from "sequelize"; // ESM

const sequelize = new Sequelize(process.env.NEON_URI, { logging: false }); // create an instance/copy of the Sequelize tool

//Optional consle log for testing the connection
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize; //Export the instance
