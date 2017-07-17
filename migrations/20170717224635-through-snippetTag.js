'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('snippetTags', {
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
        tagId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Tags',
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
    return queryInterface.dropTable('snippetTags');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
