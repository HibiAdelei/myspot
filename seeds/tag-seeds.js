const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Amusement',
    },
    {
        tag_name: 'Greenery',
    },
    {
        tag_name: 'Beach',
    },
    {
        tag_name: 'Restaurat',
    },
    {
        tag_name: 'Landmark',
    },
    {
        tag_name: 'Resident Area',
    },
    {
        tag_name: 'Shopping',
    },
    {
        tag_name: 'Hospital/Clinic',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;