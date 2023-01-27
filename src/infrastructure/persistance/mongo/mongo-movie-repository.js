const MovieRepository = require('../repositories/movie-repository');

class MongoMovieRepository extends MovieRepository {
	constructor({mongoDbHandler, movieDocumentParser}) {
		super();
		this.mongoDbHandler = mongoDbHandler;
		this.movieDocumentParser = movieDocumentParser;
	}

	async save(movie) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			const movieDocument = this.movieDocumentParser.toDocument(movie);
			await db.collection(this.collection).insertOne(movieDocument);
		} catch (e) {
			throw new Error(e);
		}
	}

	async findByOmdbId(omdb_id) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			const movieDocument = await db.collection(this.collection).findOne({omdb_id: parseInt(omdb_id)});
			return movieDocument ? this.movieDocumentParser.toDomain(movieDocument) : null;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = MongoMovieRepository;
