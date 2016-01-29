/**
 * Lib
 */

//module.exports.respond = function(event, cb) {
//
//  var response = {
//    message: "Your Serverless function ran successfully!"
//  };
//
//  return cb(null, response);
//};


// Dependencies
var PasswordOfTheDay = require('./passwordOfTheDay');

module.exports.respond = function(event, cb) {

  var result = PasswordOfTheDay.checkPotd(event.password);  
  var response = {
    message: result
  };

  return cb(null, response);
};
