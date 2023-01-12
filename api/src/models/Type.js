const sequelize = require('sequelize');
const {DataTypes} = require ('sequelize');

const Type = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {timestamps: false});
}

module.exports = Type;