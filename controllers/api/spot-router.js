const { Spot, SpotTag } = require('../../models');

const router = require('express').Router();

// Route for creating a new spot
router.post('/', async (req, res) => {
  // Remove the tags from the request
  const { tags, ...newSpotAttributes } = req.body;
  try {
    // Get user id via request session
    // Create a new spot
    const newSpot = await Spot.create({
      ...newSpotAttributes,
      user_id: req.session.userId,
    });

    // if there's tags, we need to create pairings to bulk create in the SpotTag model
    // (From HW13)
    if (tags.length) {
      const spotTagIdArr = tags.map((tag_id) => {
        return {
          spot_id: newSpot.id,
          tag_id,
        };
      });
      await SpotTag.bulkCreate(spotTagIdArr);
    }

    res.status(200).json(newSpot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
