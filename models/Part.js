const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our part model
class Part extends Model {
  static upvote(body, models) {
    return models.Vote.create({}).then(() => {
      return Part.findOne({
        where: {
          id: body.part_id,
        },
        attributes: ["id", "title", "stock"],
      });
    });
  }
}

// create fields/columns for part model
Part.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "part",
  }
);

module.exports = Part;
