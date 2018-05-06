module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
      burgerName: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };