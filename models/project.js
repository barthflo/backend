'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Picture, {onUpdate:'CASCADE', onDelete:'CASCADE'});
      this.belongsToMany(models.Category, {through : models.ProjectCategories});
    }
  };
  Project.init({
    title: {type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.TEXT, allowNull:false},
    link_url: {type:DataTypes.STRING, allowNull:false},
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};