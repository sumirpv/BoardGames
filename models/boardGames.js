module.exports = function(sequelize, DataTypes) {
    var BoardGames = sequelize.define("boardGames", {
        gameName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    //   gameType: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
     minPlayer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxPlayer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      timeToPlay: {
        type: DataTypes.INTEGER,
        defaultValue: 60
      },
      timetolearn:{
          type: DataTypes.INTEGER,
          defaultValue : 45
      }
    },
    {
    timestamps : false
    });
    return BoardGames;
  };
  