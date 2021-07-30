const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SpotTag extends Model { }

SpotTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        spot_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'spot',
                key: 'id',
                unique: false
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'spot_tag',
    }
);

module.exports = SpotTag;
