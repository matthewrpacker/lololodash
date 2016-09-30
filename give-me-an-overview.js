// * Calculates the total number of orders for each article.
// * Sorts the resulting array so that the articles with the highest number of orders are on top

var _ = require("lodash");

var worker = function (orders) {

    var overviewarray = [],
        total = 0;

    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function (item, key) {

        key = parseInt(key);
        total = 0;

        if (item.length === 1) {
            total = item[0].quantity;

        } else {
            total = _.reduce(item, function(sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        overviewarray.push({
            article: key,
            total_orders: total
        });

    });

    overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

    return overviewarray;
};

module.exports = worker;
