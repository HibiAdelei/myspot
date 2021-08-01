const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spot extends Model { }

Spot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 5),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        longitude: {
            type: DataTypes.DECIMAL(10, 5),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
                unique: "false"
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'spot',
    }
);

module.exports = Spot;


