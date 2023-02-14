const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleWare');
const {
  getController,
  setController,
  updateController,
  deleteController,
} = require('../controllers/goalControllers');

router.route('/').get(protect, getController).post(protect, setController);
router.route('/:id').put(protect, updateController).delete(protect,deleteController);

module.exports = router;
