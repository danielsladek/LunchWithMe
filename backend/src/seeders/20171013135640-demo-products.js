'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const productCategoriesPromise = queryInterface.bulkInsert(
      'ProductCategories',
      [
        { name: 'Car', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Scooter', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );

    const productsPromise = queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'Škoda Superb',
          price: 750000,
          shortInfo: 'Luxury car produced in the Czech Republic.',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Ford Focus',
          price: 600000,
          shortInfo: 'Sports car made in USA.',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Moped',
          price: 1000,
          shortInfo: 'No comment.',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return Promise.all([productCategoriesPromise, productsPromise]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('ProductCategories', null, {}),
      queryInterface.bulkDelete('Products', null, {}),
    ]);
  },
};
