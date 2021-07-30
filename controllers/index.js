const router = require("express").Router();

const homeRouter = require("./home-router");
const profileRouter = require("./profile-router");
const spotRouter = require("./spot-router");
const apiRouter = require("./api");

router.use("/", homeRouter);
router.use("/api", apiRouter);
router.use("/profile", profileRouter);
router.use("/spot", spotRouter);
module.exports = router;
