'use strict';
module.exports = function(sequelize, DataTypes) {
  var Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    notes: DataTypes.STRING,
    language: DataTypes.STRING,

  }, {});
  Snippet.associate = function(models){
    Snippet.belongsTo(models.User, {as: 'users', foreignKey: 'userId', onDelete: 'cascade', hooks: true});
    Snippet.belongsToMany(models.User, {as: 'userStars', through: 'Stars', foreignKey: 'snippetId', otherKey: 'userId', onDelete: 'cascade', hooks: true});
    Snippet.belongsToMany(models.Tag, {as: 'tagSnippets', through: 'snippetTags', foreignKey: 'snippetId', otherKey: 'tagId', onDelete: 'cascade', hooks: true});
  };
  return Snippet;
};
