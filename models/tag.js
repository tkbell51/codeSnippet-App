'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models){
    Tag.belongsToMany(models.Snippet, {as:'tagSnippets', through: 'snippetTags', foreignKey: 'tagId', otherKey: 'snippetId', onDelete: 'cascade', hooks: true});
  }
  return Tag;
};
