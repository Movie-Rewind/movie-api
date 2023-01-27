const Movie = require('../../../../../../domain/movie/Movie');
const MongoMovieRepository = require('../../../../../../infrastructure/persistance/mongo/mongo-movie-repository');

describe('Movie Repository', () => {
	const mongoDbHandlerMock = {getInstance: jest.fn()};
	const dbInstanceMock = {collection: jest.fn(), insertOne: jest.fn(), findOne: jest.fn()};
	const movieDocumentParserMock = {toDocument: jest.fn(), toDomain: jest.fn()};
	const movieMock = {
		'id': 555,
		'omdb_id': 619,
		'adult': false,
		'backrop_path': null,
		'belongs_to_collection': null,
		'budget': 63000000,
		'genres': [{
			'id': 18,
			'name': 'Drama',
		}],
		'homepage': 'http://www.foxmovies.com/movies/fight-club',
		'imdb_id': 'tt0137523',
		'original_language': 'en',
		'original_title': 'Fight Club',
		'overview': 'Un joven sin ilusiones lucha contra su insomnio, consecuencia quizás de su hastío por su gris y rutinaria vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón que sostiene una filosofía muy particular: el perfeccionismo es cosa de gentes débiles; en cambio, la autodestrucción es lo único que hace que realmente la vida merezca la pena. Ambos deciden entonces formar un club secreto de lucha donde descargar sus frustaciones y su ira que tendrá un éxito arrollador.',
		'popularity': 66.417,
		'poster_path': '/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg',
		'production_companies': [{
			'id': 508,
			'logo_path': '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
			'name': 'Regency Enterprises',
			'origin_country': 'US',
		}, {
			'id': 711,
			'logo_path': '/tEiIH5QesdheJmDAqQwvtN60727.png',
			'name': 'Fox 2000 Pictures',
			'origin_country': 'US',
		}, {
			'id': 20555,
			'logo_path': '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
			'name': 'Taurus Film',
			'origin_country': 'DE',
		}, {
			'id': 54051,
			'logo_path': null,
			'name': 'Atman Entertainment',
			'origin_country': '',
		}, {
			'id': 54052,
			'logo_path': null,
			'name': 'Knickerbocker Films',
			'origin_country': 'US',
		}, {
			'id': 4700,
			'logo_path': '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
			'name': 'The Linson Company',
			'origin_country': 'US',
		}],
		'production_countries': [{
			'iso_3166_1': 'DE',
			'name': 'Germany',
		}, {
			'iso_3166_1': 'US',
			'name': 'United States of America',
		}],
		'release_date': '1999-10-15',
		'revenue': 100853753,
		'runtime': 139,
		'spoken_languages': [{
			'english_name': 'English',
			'iso_639_1': 'en',
			'name': 'English',
		}],
		'status': 'Released',
		'tagline': 'Caos, travesuras y jabón',
		'title': 'El club de la lucha',
		'video': false,
		'vote_average': 8.4,
		'vote_count': 23722,
	};
	const collection = 'movies';
	afterEach(() => {
		jest.clearAllMocks();
	});

	beforeEach(() => {
		mongoMovieRepositoryMock = new MongoMovieRepository({
			mongoDbHandler: mongoDbHandlerMock,
			movieDocumentParser: movieDocumentParserMock,
		});
	});
	it('Save function ', async () => {
		const movieDomain = new Movie(movieMock);
		mongoDbHandlerMock.getInstance.mockReturnValue(dbInstanceMock);
		dbInstanceMock.collection.mockReturnValue(dbInstanceMock);
		dbInstanceMock.insertOne.mockReturnValue(true);
		movieDocumentParserMock.toDocument.mockReturnValue(movieMock);

		await mongoMovieRepositoryMock.save(movieDomain);

		expect(mongoDbHandlerMock.getInstance).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledWith(collection);
		expect(dbInstanceMock.insertOne).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.insertOne).toHaveBeenCalledWith(movieMock);
	});

	it('FindByOmdbId function success', async () => {
		const movieDomain = new Movie(movieMock);
		mongoDbHandlerMock.getInstance.mockReturnValue(dbInstanceMock);
		dbInstanceMock.collection.mockReturnValue(dbInstanceMock);
		dbInstanceMock.findOne.mockReturnValue(movieMock);
		movieDocumentParserMock.toDomain.mockReturnValue(movieDomain);

		const response = await mongoMovieRepositoryMock.findByOmdbId(movieMock.omdb_id);

		expect(mongoDbHandlerMock.getInstance).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledWith(collection);
		expect(dbInstanceMock.findOne).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.findOne).toHaveBeenCalledWith({omdb_id: movieMock.omdb_id});
		expect(response).toBe(movieDomain);
	});

	it('FindByOmdbId function error', async () => {
		const movieDomain = new Movie(movieMock);
		mongoDbHandlerMock.getInstance.mockReturnValue(dbInstanceMock);
		dbInstanceMock.collection.mockReturnValue(dbInstanceMock);
		dbInstanceMock.findOne.mockReturnValue(null);
		movieDocumentParserMock.toDomain.mockReturnValue(movieDomain);

		const response = await mongoMovieRepositoryMock.findByOmdbId(movieMock.omdb_id);

		expect(mongoDbHandlerMock.getInstance).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.collection).toHaveBeenCalledWith(collection);
		expect(dbInstanceMock.findOne).toHaveBeenCalledTimes(1);
		expect(dbInstanceMock.findOne).toHaveBeenCalledWith({omdb_id: movieMock.omdb_id});
		expect(response).toBe(null);
	});
});
