'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  await queryInterface.bulkInsert('Bands', [
    { name: 'Paramore', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Commissioned', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Maze',createdAt: new Date(), updatedAt: new Date() },
    { name: 'New Breed', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Earth, Wind, and Fire', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Tye Tribbeett', createdAt: new Date(), updatedAt: new Date() }
     ], {});
  },
  async down (queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bands', null, {});
  }
 }

