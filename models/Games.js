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

      type: DataTypes.STRING(2000),

      allowNull: false,

    },
    description: {

      type: DataTypes.STRING(2000),


    },
    developer: {
      type: DataTypes.STRING(2000),
      
      allowNull: false,
    },
    platforms: {

      type: DataTypes.STRING(2000),

      allowNull: false,

    },
    publisher: {

      type: DataTypes.STRING(2000),

      allowNull: false,

    },
    genre: {

      type: DataTypes.STRING(100),

      allowNull: false,

    },
    released: {

      type: DataTypes.STRING,

      allowNull: true,

    },
    // user_rating: {
    //   type: DataTypes.INTEGER,
    // },
    // user_id: {

    //   type: DataTypes.INTEGER,

    //   references: {

    //     model: 'user',

    //     key: 'id',

    //   },
    // },
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
