const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "graslowsnail",
    email: "graslowsnail@gmail.com",
    password: "password1234",
  },
  {
    username: "graslow",
    email: "graslow@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
