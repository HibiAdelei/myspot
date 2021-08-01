const router = require('express').Router();
const { User, Spot, Tag, SpotTag } = require('../models');

// use withAuth middleware to redirect from protected routes.
const withAuth = require('../util/withAuth');

router.get('/:id', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }

    // Get a spot from sequelize
    const spotData = await Spot.findByPk(req.params.id, {
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
    const spot = spotData.get({ plain: true });

    const data = {
      title: 'MySpot',
      isLoggedIn: req.session.isLoggedIn,
      user,
      spot,
    };
    console.log(data);

    res.render('spot', data);
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

module.exports = router;
