'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('ToDoLists', [
      {
        title: 'Free Practice Day',
        description: 'Free Practice 1 & Free Practice 2',
        startTime: new Date(),
        status: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Free Practice & Qualification Day',
        description: 'Free Practice 3 & Qualification',
        startTime: new Date(),
        status: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Race Day',
        description: 'Warm-up & Race',
        startTime: new Date(),
        status: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Race Day',
        description: 'Warm-up & Race',
        startTime: new Date(),
        status: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Race Day',
        description: 'Warm-up & Race',
        startTime: new Date(),
        status: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};