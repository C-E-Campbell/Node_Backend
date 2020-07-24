const express = require('express');

const {
  getAllScorpions,
  getScorpionById,
  getRangeofScorpions,
  getPoisonousScorpions,
} = require('../controllers/scorpionController.js');

const scorpionRouter = express.Router();

scorpionRouter.route('/').get(getAllScorpions);
scorpionRouter.route('/poisonous').get(getPoisonousScorpions);
scorpionRouter.route('/range/:num').get(getRangeofScorpions);
scorpionRouter.route('/:id').get(getScorpionById);

module.exports = scorpionRouter;
