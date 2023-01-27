const awilix = require('awilix');

const {v4: uuidv4} = require('uuid');
const mongoDbHandler = require('./infrastructure/persistance/mongo/db-handler');
const {logger} = require('@Movie-Rewind/core');
const {idGenerator} = require('@Movie-Rewind/core');
const MUUID = require('uuid-mongodb');

// Commands
const SaveMovie = require('./application/save-movie');
const FindMovieByOmdbId = require('./application/find-movie-by-omdb-id');

const MongoMovieRepository = require('./infrastructure/persistance/mongo/mongo-movie-repository');
const movieDocumentParser = require('./domain/movie/services/movie-document-parser');

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
	mongoDbHandler: awilix.asFunction(mongoDbHandler),
	logger: awilix.asValue(logger),
	idGenerator: awilix.asFunction(idGenerator),
	muuid: awilix.asValue(MUUID),
	saveMovie: awilix.asClass(SaveMovie),
	findMovieByOmdbId: awilix.asClass(FindMovieByOmdbId),
	movieRepository: awilix.asClass(MongoMovieRepository),
	movieDocumentParser: awilix.asFunction(movieDocumentParser),
	uuidv4: awilix.asValue(uuidv4),
});

module.exports = container;
