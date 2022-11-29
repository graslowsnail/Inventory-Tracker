const { Part } = require("../models");

const partdata = [
  {
    title: "hood",
    stock: 34,
  },
  {
    title: "moter",
    stock: 12,
  },
  {
    title: "rims",
    stock: 77,
  },
];

const seedParts = () => Part.bulkCreate(partdata);

module.exports = seedParts;
