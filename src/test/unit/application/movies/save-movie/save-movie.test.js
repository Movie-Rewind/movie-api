const Movie = require('../../../../../domain/movie/Movie');
const SaveMovie = require('../../../../../application/save-movie/index');
const SaveMovieCommand = require('../../../../../application/save-movie/save-movie-command');
const MovieAlreadyExistsError = require('../../../../../domain/movie/errors/movie-already-exists-error');

describe('Save movie', () => {
	const movieRepositoryMock = {save: jest.fn(), findByOmdbId: jest.fn()};
	const idGeneratorMock = {generate: jest.fn()};
	const movieMock = {
		'id': 555,
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


	afterEach(() => {
		jest.clearAllMocks();
	});

	beforeEach(() => {
		saveMovieMock = new SaveMovie({
			movieRepository: movieRepositoryMock,
			idGenerator: idGeneratorMock,
		});
	});

	test('should Be 1 equal 1', () => {
		expect(1).toBe(1);
	});

	test('should save movie with correct data', async () => {
		const idMock = 619;
		const commandMock = new SaveMovieCommand(movieMock);
		const movieToSave = new Movie({id: idMock, ...movieMock});
		idGeneratorMock.generate.mockReturnValue(idMock);
		await saveMovieMock.save(commandMock);
		movieToSave.omdb_id = 555;
		movieToSave.id = idMock;
		expect(movieRepositoryMock.save).toHaveBeenCalledTimes(1);


		expect(movieRepositoryMock.save).toHaveBeenCalledWith(movieToSave);
		expect(idGeneratorMock.generate).toHaveBeenCalledTimes(1);
		expect(movieRepositoryMock.findByOmdbId).toHaveBeenCalledTimes(1);
		expect(movieRepositoryMock.findByOmdbId).toHaveBeenCalledWith(555);
	});

	test('Should return movie Already Exists error', async () => {
		movieRepositoryMock.findByOmdbId.mockReturnValue({});
		const commandMock = new SaveMovieCommand(movieMock);

		await expect(saveMovieMock.save(commandMock)).rejects.toThrow(MovieAlreadyExistsError);

		expect(movieRepositoryMock.findByOmdbId).toHaveBeenCalledTimes(1);
		expect(movieRepositoryMock.findByOmdbId).toHaveBeenCalledWith(555);
		expect(idGeneratorMock.generate).toHaveBeenCalledTimes(0);
	});
});
