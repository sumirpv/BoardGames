module.exports = function(sequelize, DataTypes) {
    var BoardGames = sequelize.define("boardGames", {
        gameName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      age_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.STRING,
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
        defaultValue: 60,
        allowNull: false
      },
      manufacturer:{
          type: DataTypes.STRING,
          allowNull: false
      },
      year:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      img:{
        type: DataTypes.STRING,
        allowNull: false
      },
      },
    {
    timestamps : false
    });
    //saying boardGames has many Category 
    BoardGames.associate = function(models) {
    
      BoardGames.hasMany(models.category, {
        onDelete: "cascade"
      });
    }

    return BoardGames;
  };

  