const { spot } = require('../models');

const spotData = [
    {
        title: "UCSD",
        latitude: 32.8802,
        longtitude: -117.2341,
        description: "UCSD",
        tag_id: 1,
        user_id: 1
    },
    {
        title: "La Jolla Beach",
        latitude: 32.8571,
        longtitude: -117.2576,
        description: "Beach",
        tag_id: 2,
        user_id: 2
    },
    {
        title: "University of San Diego",
        latitude: 32.772,
        longtitude: -117.1882,
        description: "USD",
        tag_id: 3,
        user_id: 3
    },
];

const seedSpot = () => spot.bulkCreate(spotData);

module.exports = seedSpot;
