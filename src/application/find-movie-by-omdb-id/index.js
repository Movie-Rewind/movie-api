const Movie = require('../../domain/movie/Movie');
const FindMovieByOmdbIdResponse = require('./find-movie-by-omdb-id-response');
const MovieAlreadyExistsError = require('../../domain/movie/errors/movie-already-exists-error');
const MovieNotFoundError = require('../../domain/movie/errors/movie-not-found-error');

class FindMovieByOmdbId {
	constructor({movieRepository}) {
		this.movieRepository = movieRepository;
	}

	async find({omdb_id}) {
		const movie = await this.movieRepository.findByOmdbId(omdb_id);
		this._checkIfExistsMovie(movie);
		return new FindMovieByOmdbIdResponse(Object.freeze(movie));
	}

	_checkIfExistsMovie(movie) {
		if (!movie) {
			throw new MovieNotFoundError('Movie Not Found');
		}
	}
}

module.exports = FindMovieByOmdbId;
