   var _ = require("lodash");

   var worker = function(user) {
       var greeting = 'Hello <%= name %> (logins: <%= login.length%>)';

       return _.template(greeting)(user);
   };

   module.exports = worker;
