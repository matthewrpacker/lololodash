var _ = require("lodash");

var worker = function (item) {
  var result = {
    hot: [],
    warm: []
  };

  function temp (item) {
    return item > 19;
  }

  _.forEach(item, function (town, townName) {

    if (_.every(town, temp)) {
      result.hot.push(townName);
    } else if (_.some(town, temp)) {
      result.warm.push(townName);
    }

  });

  return result;
};

module.exports = worker;
