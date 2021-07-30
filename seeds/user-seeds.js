const { user } = require('../models');

const userData = [
    {
        username: "Lily",
        bio: "Team MySpot",
        password: "asdf1234"
    },
    {
        username: "Lilian",
        bio: "Team MySpot",
        password: "qwer1234"
    },
    {
        username: "Daeyoung",
        bio: "Team MySpot",
        password: "zxcv1234"
    },
];

const seedUserTag = () => user.bulkCreate(userData);

module.exports = seedUserTag;
