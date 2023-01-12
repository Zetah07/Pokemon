const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hp: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 400 },
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 300 },
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 350 },
      },
      speed: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 300 },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.TEXT,
        isUrl: true,
      },
    },
    { timestamps: false }
  );

};
