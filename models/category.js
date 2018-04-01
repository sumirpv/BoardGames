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

/* category options for games:

family
kids
adults
party
card game
dice
educational
memory_game
word_game
action_game
dexterity
humor
math
military
strategy
puzzle
miniatures */