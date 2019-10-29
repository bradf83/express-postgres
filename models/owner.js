'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    Owner.hasMany(models.Company);
  };
  return Owner;
};