const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cart',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuid(),
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  );
};
