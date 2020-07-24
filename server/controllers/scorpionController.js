module.exports = {
  getAllScorpions: (req, res, next) => {
    res.send('router working');
  },
  getScorpionById: (req, res, next) => {
    res.send('single scorpion');
  },
  getPoisonousScorpions: (req, res, next) => {
    res.send('these are poisonous');
  },
  getRangeofScorpions: (req, res, next) => {
    res.send('range');
  },
};
