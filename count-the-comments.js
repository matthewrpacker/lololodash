var _ = require("lodash");

var worker = function(comments) {
  return _.chain(comments)
  .groupBy("username")
  .map(function(item, name) {
    return {
      username: name, comment_count: _.size(item)
    };
  })
  .sortBy(function(counted) {
    return -counted["comment_count"];
  });
};

module.exports = worker;
