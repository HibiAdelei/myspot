const router = require('express').Router();
const { User, Spot } = require('../models');

// use withAuth middleware to redirect from protected routes.
const withAuth = require('../util/withAuth');

// Route to display a user's own profile
router.get('/', withAuth, async (req, res) => {
  // Redirect to user's profile page with thier id
  res.redirect(`/profile/${req.session.userId}`);
});

// Route to display a user's profile
router.get('/:id', async (req, res) => {
  try {
    // Find the user with this id
    // Return a 404 if there is no user with this id
    const userData = await User.findByPk(req.params.id, {
      attributes: ['id', 'username', 'bio'],
    });

    const user = userData.get({ plain: true });

    if (!user) {
      res.sendStatus(404).json('No user with that id found!');
    }

    // Find all spots that contain the user_id :id
    // But don't return any user data with this query, we get it in the last one
    const userSpotsData = await Spot.findAll({
      include: {
        model: User,
        where: {
          id: req.params.id,
        },
        attributes: [],
        required: true,
      },
    });

    // Serialize spot data
    const userSpots = userSpotsData.map((item) => {
      return item.get({ plain: true });
    });

    // Check if the :id matches the user id of the current session
    // If so, display a logout button
    const matchesSessionUser = req.session.userId === parseInt(req.params.id);

    const data = {
      title: `${user.username}'s Profile`,
      isLoggedIn: req.session.isLoggedIn,
      user,
      spots: userSpots,
      matchesSessionUser,
    };

    res.render('profile', data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
