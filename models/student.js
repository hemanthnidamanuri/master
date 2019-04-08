'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Students', {
    sname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ucolg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saddress: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
