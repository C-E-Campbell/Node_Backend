const data = require('../data');

module.exports = {
  getAllScorpions: (req, res) => {
    res.status(200).json(data);
  },
  getScorpionById: (req, res) => {
    const id = Number(req.params.id);
    if (id > 15 || id < 1) {
      res
        .status(500)
        .json(
          'error: the id you requested is too high, we only have 15 scorpions. Use 1-15'
        );
    }
    const result = data.filter((scorpion) => scorpion.id === id);
    res.status(200).json(result);
  },
  getPoisonousScorpions: (req, res) => {
    const scorpions = data.filter((scorpions) => scorpions.poisonous === true);
    res.status(200).json(scorpions);
  },
  getRangeofScorpions: (req, res) => {
    const numOfScorpions = Number(req.params.num);
    if (numOfScorpions > data.length || numOfScorpions < 1) {
      res
        .status(500)
        .json('error: requesting too many or not enough scorpions! Use 1-15');
    }
    const scorpions = data.slice(0, numOfScorpions);
    res.status(200).json(scorpions);
  },
};
