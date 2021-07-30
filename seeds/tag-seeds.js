const { Tag } = require('../models');

const tagData = [
    {
        id: 1,
        tag_name: 'Amusement',
    },
    {
        id: 2,
        tag_name: 'Greenery',
    },
    {
        id: 3,
        tag_name: 'Beach',
    },
    {
        id: 4,
        tag_name: 'Restaurat',
    },
    {
        id: 5,
        tag_name: 'Landmark',
    },
    {
        id: 6,
        tag_name: 'Resident Area',
    },
    {
        id: 7,
        tag_name: 'Shopping',
    },
    {
        id: 8,
        tag_name: 'Hospital/Clinic',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
