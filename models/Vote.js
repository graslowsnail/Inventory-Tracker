// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Vote extends Model {}

// Vote.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//     part_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "part",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "vote",
//   }
// );

// module.exports = Vote;
