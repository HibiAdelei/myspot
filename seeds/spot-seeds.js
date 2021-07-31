const { Spot } = require('../models');

const spotData = [
    {
        id: 1,
        title: "UCSD",
        latitude: 32.8802,
        longitude: -117.2341,
        description: "UCSD",
        tag_id: 1,
        user_id: 1
    },
    {
        id: 2,
        title: "La Jolla Beach",
        latitude: 32.8571,
        longitude: -117.2576,
        description: "Beach",
        tag_id: 2,
        user_id: 2
    },
    {
        id: 3,
        title: "University of San Diego",
        latitude: 32.772,
        longitude: -117.1882,
        description: "USD",
        tag_id: 3,
        user_id: 3
    },
];

const seedSpot = () => Spot.bulkCreate(spotData);

module.exports = seedSpot;
