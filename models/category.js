module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("categories", {
        name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
    timestamps : false
    });
    return Categories;
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