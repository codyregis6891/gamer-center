const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
  {
    id: {

      type: DataTypes.INTEGER,

      allowNull: false,

      primaryKey: true,

      autoIncrement: true,

    },
    name: {

      type: DataTypes.STRING,

      allowNull: false,

    },
    description: {

      type: DataTypes.STRING,

    },
    genre: {
      type: DataTypes.STRING,
      
      allowNull: false,
    },
    price: {

      type: DataTypes.DECIMAL,

      allowNull: false,

    },
    user_rating: {
      type: DataTypes.INTEGER,
    },
    user_id: {

      type: DataTypes.INTEGER,

      references: {

        model: 'user',

        key: 'id',

      },
    },
  },
  {
    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'games',

  }
);

module.exports = Games;
