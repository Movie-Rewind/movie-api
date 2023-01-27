class SaveMovieResponse {
	constructor(movie) {
		this.movie = movie.toObject();
	}
}

module.exports = SaveMovieResponse;
