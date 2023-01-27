const {ApplicationError} = require('@Movie-Rewind/core');


class MovieNotFoundError extends ApplicationError {
	constructor(message) {
		super(message);
		this.message = 'MovieNotFoundError';
	}
}

module.exports = MovieNotFoundError;
