'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Picture, {onUpdate:'CASCADE', onDelete:'CASCADE', foreignKey : 'id'})
    }
  };
  About.init({
    description: DataTypes.TEXT,
    // pictureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'About',
  });
  return About;
};