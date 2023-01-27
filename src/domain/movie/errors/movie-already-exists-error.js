const {ApplicationError} = require('@Movie-Rewind/core');

class MovieAlreadyExistsError extends ApplicationError {
	constructor(message) {
		super(message);
		this.message = 'MovieAlreadyExistsError';
	}
}

module.exports = MovieAlreadyExistsError;
