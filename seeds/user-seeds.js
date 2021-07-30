const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "Lily",
        bio: "Team MySpot",
        password: "asdf1234"
    },
    {
        id: 2,
        username: "Lilian",
        bio: "Team MySpot",
        password: "qwer1234"
    },
    {
        id: 3,
        username: "Daeyoung",
        bio: "Team MySpot",
        password: "zxcv1234"
    },
];

const seedUserTag = () => User.bulkCreate(userData);

module.exports = seedUserTag;
