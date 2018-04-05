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
        type: DataTypes.STRING,
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
    // saying boardGames has many Category 
    BoardGames.associate = function(models) {
    
      BoardGames.belongsTo(models.category, {
        foreignKey:"category_id"
      });
      BoardGames.belongsTo(models.age, {
        foreignKey:"age_id"
      });
    }

    return BoardGames;
  };

  