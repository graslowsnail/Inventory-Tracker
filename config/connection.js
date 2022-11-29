// import the sequlize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// //create connection to our database, pass in your mysql infromation for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

module.exports = sequelize;