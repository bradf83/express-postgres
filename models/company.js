'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    chargesGST: DataTypes.BOOLEAN,
    chargesPST: DataTypes.BOOLEAN,
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.belongsTo(models.Owner);
  };
  return Company;
};