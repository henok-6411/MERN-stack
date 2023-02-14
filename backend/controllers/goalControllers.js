const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalSchema');
const User = require('../model/userSchema');
//const protocol = require('../middleware/authMiddleWare');

//@description Get all goals
//@route GET '/api/goals'
//@privacy Private

const getGoal = asyncHandler(async (req, res) => {
  const goals = await  Goal.find({user:req.user.id})
  if (!goals) {
    res.status(400)
    throw new Error('wrong request');
  }
  res.send(goals);
});

//@description Set all goals
//@route POST '/api/goals'
//@privacy Private
const setGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.create({
    text: req.body.text,
    user:req.user.id,
  });
  if (!goals) {
    res.status(400)
    throw new Error('Wrong reqeust')
  }
  res.send(goals);
});
//@description update goals
//@route PUT '/api/goals/:id'
//@privacy Private
const updateGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    res.status(400);
    throw new Error('wrong request');
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found or authorized')
  }
  const updatedGoals = await Goal.findByIdAndUpdate( req.params.id, req.body , { new:true});
  res.send(updatedGoals);
});
//@description delete goals
//@route DELETE '/api/goals/:id'
//@privacy Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    res.status(400);
    throw new Error('request not found')
  }
  const deletedGoal = await Goal.findByIdAndDelete(goals)
  res.send(deletedGoal)

});

module.exports = {
  getController: getGoal,
  setController: setGoal,
  updateController: updateGoal,
  deleteController: deleteGoal,
};
