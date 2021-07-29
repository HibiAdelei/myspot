const router = require("express").Router();
const { User, Spot, Tag, SpotTag } = require("../models");

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

// Route to display a user's profile
router.get("/profile/:id", async (req, res) => {
  try {
    // Find the user with this id
    // Return a 404 if there is no user with this id
    const userData = await User.findByPk(req.params.id, {
      attributes: ["id", "username", "bio"],
    });

    const user = userData.get({ plain: true });

    if (!user) {
      res.sendStatus(404).json("No user with that id found!");
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
    const userSpots = userSpotsData.get({ plain: true });

    // Check if the :id matches the user id of the current session
    // If so, display a logout button
    const matchesSessionUser = req.session.user_id === req.params.id;

    res.render("profile", {
      title: `${user.username}'s Profile`,
      user,
      spots: userSpots,
      matchesSessionUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

module.exports = router;
