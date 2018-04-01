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
    return Age;
  };

/* options for age ranges:

Less than 8 years old
8 - 13 years old
13 Years and Up
Adult Games Only

*/