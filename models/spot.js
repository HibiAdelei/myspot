const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Spot extends Model { }

Spot.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        latitude: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        longtitude: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
);

module.exports = Spot;
