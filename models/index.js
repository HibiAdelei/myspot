const User = require('./user');
const Spot = require('./spot');
const Tag = require('./tag');
const SpotTag = require('./spottag');

// Define sequelize associations in this file.

// Spots belongsTo User
Spot.belongsTo(User, {
    foreignKey: 'user_id',
});

// user have many spots
User.hasMany(Spot, {
    foreignKey: 'user_id',
});

// tags belongToMany Spots (through spotTag)
Tag.belongsToMany(Spot, {
    through: SpotTag,
    foreignKey: 'tag_id',
});

Spot.belongsToMany(Tag, {
    through: SpotTag,
    foreignKey: 'spot_id',
});



module.exports = { User };
