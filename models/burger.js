module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {

      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      burgerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

  return Burger;
  };