import sequelize from "../db/dbConnection.js";
import { DataTypes } from "sequelize"; // important

/**
 * This is a model of showing all the users information
 * @example
 * @link www.google.com
 *
 */

const Users = sequelize.define("Users", {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, validate: { isEmail: true } },
});

Users.sync({ alter: true }); // Only when there is table items POST into the database, the table will be then created. If it's an empty table , it won't create for now.

export default Users;
