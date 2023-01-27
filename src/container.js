const awilix = require('awilix');

const mongoDbHandler = require('./infrastructure/persistance/mongo/db-handler');
const {logger} = require('@Movie-Rewind/core');
const {ApplicationError} = require('@Movie-Rewind/core');
const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
	mongoDbHandler: awilix.asFunction(mongoDbHandler),
	logger: awilix.asValue(logger),
	ApplicationError: awilix.asClass(ApplicationError),
});

module.exports = container;
