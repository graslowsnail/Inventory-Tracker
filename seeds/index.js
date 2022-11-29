const seedUsers = require("./user-seeds");
const seedParts = require("./part-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedParts();
  console.log("--------------");

  process.exit(0);
};

seedAll();
