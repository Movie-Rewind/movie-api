const Movie = require('../../domain/movie/Movie');
const SaveMovieResponse = require('./save-movie-response');
const MovieAlreadyExistsError = require('../../domain/movie/errors/movie-already-exists-error');

class SaveMovie {
	constructor({movieRepository, idGenerator}) {
		this.movieRepository = movieRepository;
		this.idGenerator = idGenerator;
	}


	async save(movie) {
		const queryMovie = await this.movieRepository.findByOmdbId(movie.id);

		this._checkIfExistsMovie(queryMovie);

		const movieDomain = new Movie(this._parseIds(movie));

		await this.movieRepository.save(movieDomain);
		return new SaveMovieResponse(movieDomain);
	}
	_parseIds(movie) {
		movie.omdb_id = movie.id;
		movie.id = this._generateMovieId();
		return movie;
	}

	_checkIfExistsMovie(movie) {
		if (movie) {
			throw new MovieAlreadyExistsError('Movie already exists');
		}
	}

	_generateMovieId() {
		return this.idGenerator.generate();
	}
}

module.exports = SaveMovie;
