const express = require('express');
const router = express.Router();
const {
  getController,
  setController,
  updateController,
  deleteController,
} = require('../controllers/goalControllers');

router.route('/').get(getController).post(setController);
router.route('/:id').put(updateController).delete(deleteController);

module.exports = router;
