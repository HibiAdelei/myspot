const seedSpot = require('./spot-seeds');
const seedSpotTag = require('./spot-tag-seeds');
const seedTags = require('./tag-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    await seedSpot();
    await seedSpotTag();
    await seedTags();

    process.exit(0);
};

seedAll();
