var _ = require("lodash");

var worker = function(freelancers) {

  var average,
  underperform,
  overperform;

  freelancers = _.sortBy(freelancers, 'income');

  var average = _.reduce(freelancers, function(sum, num) {
    return sum + num.income;
  }, 0);

  average = average / freelancers.length;

  underperform = _.filter(freelancers, function (num) {
    return num.income <= average;
  });

  overperform = _.filter(freelancers, function (num) {
    return num.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
