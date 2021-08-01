const router = require('express').Router();
const Sequelize = require('sequelize');
const { User, Spot, Tag, SpotTag } = require('../models');

// use withAuth middleware to redirect from protected routes.
const withAuth = require('../util/withAuth');

router.get('/', async (req, res) => {
  try {
    // If logged in, return the user associated with this session
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }

    // Get a random spot from sequelize
    const spotData = await Spot.findAll({
      order: Sequelize.literal('rand()'),
      limit: 1,
      include: [
        {
          model: User,
          required: true,
        },
        {
          model: Tag,
          through: {
            model: SpotTag,
            attributes: [],
          },
          as: 'tags',
        },
      ],
    });
    // Serialize spot data
    const spot = spotData[0].get({ plain: true });

    const data = {
      title: 'MySpot',
      isLoggedIn: req.session.isLoggedIn,
      user,
      spot,
    };

    // Render the page
    res.render('home', data);
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/newspot', withAuth, (req, res) => {
  res.render('newspot');
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

module.exports = router;
