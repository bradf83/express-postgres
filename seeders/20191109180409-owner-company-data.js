'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Owners', [
      {
        firstName: 'Sterling',
        lastName: 'Archer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Malory',
        lastName: 'Archer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    const sterling = await db.Owner.findOne({
      where: {firstName: 'Sterling'}
    });

    queryInterface.bulkInsert('Companies', [
        {
          chargesPST: false,
          chargesGST: false,
          code: 'COMP1',
          name: 'Company One',
          OwnerId: sterling.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chargesPST: false,
          chargesGST: true,
          code: 'COMP2',
          name: 'Company Two',
          OwnerId: sterling.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

    const malory = await db.Owner.findOne({
      where: {firstName: 'Malory'}
    });

    return queryInterface.bulkInsert('Companies', [
      {
        chargesPST: false,
        chargesGST: false,
        code: 'COMP3',
        name: 'Company Three',
        OwnerId: malory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chargesPST: false,
        chargesGST: true,
        code: 'COMP4',
        name: 'Company Four',
        OwnerId: malory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Companies', null, {});
    return queryInterface.bulkDelete('Owners', null, {});
  }
};
