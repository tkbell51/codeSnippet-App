'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models){
    User.hasMany(models.Snippet, {as:"snippets", foreignKey: 'userId', onDelete: 'cascade', hooks: true});
    User.belongToMany(models.Snippet, {as:'snippetStars', through: 'Stars', foreignKey:'userId', otherKey: 'snippetId', onDelete: 'cascade', hooks: true});
  };
  return User;
};
