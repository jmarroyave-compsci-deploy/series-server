'use strict'

var varmoviesController = require('./moviesControllerService');

module.exports.moviesGet = function moviesGet(req, res, next) {
  varmoviesController.moviesGet(req, res, next);
};