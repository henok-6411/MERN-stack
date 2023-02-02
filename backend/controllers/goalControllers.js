const asyncHandler = require('express-async-handler');

//@description Get all goals
//@route GET '/api/goals'
//@privacy Private

const getGoal = asyncHandler(async (req, res) => {
  res.send({ message: 'get goal' });
});

//@description Set all goals
//@route POST '/api/goals'
//@privacy Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new Error('insert valid input');
  }
  res.send({ message: 'set goal' });
});
//@description update goals
//@route PUT '/api/goals/:id'
//@privacy Private
const updateGoal = asyncHandler(async (req, res) => {
  res.send({ message: `set goal by ${req.params.id}` });
});
//@description delete goals
//@route DELETE '/api/goals/:id'
//@privacy Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.send({ message: `delete goal by ${req.params.id}` });
});

module.exports = {
  getController: getGoal,
  setController: setGoal,
  updateController: updateGoal,
  deleteController: deleteGoal,
};
