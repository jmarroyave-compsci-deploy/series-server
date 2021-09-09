'use strict'

module.exports.moviesGet = async function( params ) {
  const DBMovie = require('./models/movie');
  const DBPerson = require('./models/person');
  var results = [];

  params.limit = (params.limit) ? Number(params.limit) : 10;
  params.page = (params.page) ? Number(params.page) : 1;
  const { page=1, limit=10, fields="title,description,country,type,genre,duration,rating,released_date,added_date,director,cast" } = params
  results = await DBMovie.find().select(`${fields.split(",").join(" ")} -_id`).limit(limit).skip( limit * (page - 1) );
  return results
};



