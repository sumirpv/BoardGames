module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("category", {
        name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
    timestamps : false
    });
    Category.associate = function(models) {

      Category.hasMany(models.boardGames, {
        foreignKey: "category_id"
      });
    };
    return Category;
  };
