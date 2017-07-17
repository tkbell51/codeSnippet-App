'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Stars', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        stars: {
          type: Sequelize.INTEGER,
          onDelete: 'cascade',
         onUpdate: 'cascade'
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'cascade',
         onUpdate: 'cascade'
        },
        snippetId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Snippets',
            key: 'id'
          },
          onDelete: 'cascade',
         onUpdate: 'cascade'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
   });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Stars');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
