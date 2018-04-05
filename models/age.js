module.exports = function(sequelize, DataTypes) {
    var Age = sequelize.define("age", {
        age_range: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
    timestamps : false
    });
    Age.associate = function(models) {

      Age.hasMany(models.boardGames, {
        foreignKey: "age_id"
      });
    };
    return Age;
  };