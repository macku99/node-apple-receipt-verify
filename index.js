'use strict';

var apple = require('./lib/apple');

module.exports = {

  EmptyError: apple.EmptyError,

  resetConfig: function () {
    apple.resetConfig();
  },

  config: function (options) {
    if (arguments.length === 0) {
      return apple.config();
    }
    apple.config(options);
	},

  extract: function (options, callback) {
    return apple.extract(options, callback);
  },

  validate: function (options, callback) {
    return apple.validate(options, callback);
	}

};
