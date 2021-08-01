const router = require('express').Router();
const usersRouter = require('./users-router');
const spotRouter = require('./spot-router');

router.use('/users', usersRouter);
router.use('/spot', spotRouter);
module.exports = router;
