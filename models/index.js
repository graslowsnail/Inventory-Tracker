// import all models
const Part = require("./Part");
const User = require("./User");
// const Vote = require("./Vote");
// const Comment = require("./Comment");

// create associations
User.hasMany(Part, {
  foreignKey: "user_id",
});

Part.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// User.belongsToMany(Post, {
//   through: Vote,
//   as: "voted_posts",

//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: "voted_posts",
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Vote, {
//   foreignKey: "user_id",
// });

// Post.hasMany(Vote, {
//   foreignKey: "post_id",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

module.exports = { User, Part };
