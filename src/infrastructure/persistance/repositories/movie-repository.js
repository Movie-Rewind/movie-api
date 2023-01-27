class MovieRepository {
	constructor() {
		this.collection = 'movies';
	}
	async findById(id) {
		throw new Error('Method not implemented yet');
	}

	async getAll() {
		throw new Error('Method not implemented yet');
	}

	async save(movie) {
		throw new Error('Method not implemented yet');
	}

	async update(movie) {
		throw new Error('Method not implemented yet');
	}

	async delete(id) {
		throw new Error('Method not implemented yet');
	}
	async findByOmdbId(omdb_id) {
		throw new Error('Method not implemented yet');
	}
}

module.exports = MovieRepository;
