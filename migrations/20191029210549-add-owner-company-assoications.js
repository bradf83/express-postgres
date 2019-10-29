'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Companies',
        'OwnerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Owners',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Companies',
        'OwnerId'
    )
  }
};
