'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    publishAt: DataTypes.STRING,
    source: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://ik.imagekit.io/Rodhey48/badminton_SE0R54cUV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643103939794"
    }
  }, {
    hooks: {
      beforeBulkCreate(inst, opt) {
        if (inst.image === null) {
          inst.image = "https://ik.imagekit.io/Rodhey48/badminton_SE0R54cUV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643103939794"

        }
      }
    },
    sequelize,
    modelName: 'News',
  });
  return News;
};