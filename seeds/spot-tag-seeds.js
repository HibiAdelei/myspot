const { spottag } = require('../models');

const SpotTagData = [
    {
        spot_id: 1,
        tag_id: 6,
    },
    {
        spot_id: 1,
        tag_id: 7,
    },
    {
        spot_id: 1,
        tag_id: 8,
    },
    {
        spot_id: 2,
        tag_id: 6,
    },
    {
        spot_id: 3,
        tag_id: 1,
    },
    {
        spot_id: 3,
        tag_id: 3,
    },
    {
        spot_id: 3,
        tag_id: 4,
    },
    {
        spot_id: 3,
        tag_id: 5,
    },
];

const seedSpotTag = () => spottag.bulkCreate(SpotTagData);

module.exports = seedSpotTag;
