import sequelize from "../db/dbConnection.js";
import { DataTypes } from "sequelize"; // important
import Users from "./Users.js";

const NotePosts = sequelize.define("NotePosts", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

//Define the relationships/associations
//This is a one to many relationship
Users.hasMany(NotePosts);
NotePosts.belongsTo(Users);

NotePosts.sync({ alter: true }); // Only when there is table items POST into the database, the table will be then created. If it's an empty table , it won't create for now.

export default NotePosts;
