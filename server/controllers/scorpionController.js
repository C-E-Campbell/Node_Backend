const data = require('../data');

module.exports = {
  getAllScorpions: (req, res, next) => {
    res.status(200).json(data);
  },
  getScorpionById: (req, res, next) => {
    const id = Number(req.params.id);
    const result = data.filter((scorpion) => scorpion.id === id);
    res.status(200).json(result);
  },
  getPoisonousScorpions: (req, res, next) => {
    const scorpions = data.filter((scorpions) => scorpions.poisonous === true);
    res.status(200).json(scorpions);
  },
  getRangeofScorpions: (req, res, next) => {
    const numOfScorpions = Number(req.params.num);
    if (numOfScorpions > data.length) {
      res.status(500).json('error: requesting too many scorpions!');
    }
    const scorpions = data.slice(0, numOfScorpions);
    res.status(200).json(scorpions);
  },
};
