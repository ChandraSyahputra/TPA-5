'use strict';

const bcrypt = require('bcrypt')

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

    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Chandra Wibawa Syahputra',
        email: 'chandra@gmail.com',
        password: bcrypt.hashSync('qwertyuiop', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Marq Marquez',
        email: 'marquez@gmail.com',
        password: bcrypt.hashSync('qwertyuiop', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Valentino Rossi',
        email: 'Rossi@gmail.com',
        password: bcrypt.hashSync('qwertyuiop', 10),
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