const express = require('express');
const SaveMovieCommand = require('../../application/save-movie/save-movie-command');
const FindMovieByOmdbId = require('../../application/find-movie-by-omdb-id/find-movie-by-omdb-id-command');
const router = express.Router();
const container = require('../../container');
const MovieAlreadyExistsError = require('../../domain/movie/errors/movie-already-exists-error');

router.post('/', async (req, res, next) => {
	const movie = req.body;
	try {
		const command = new SaveMovieCommand(movie);
		const saveMovie = container.resolve('saveMovie');
		const response = await saveMovie.save(command);
		res.status(201).json(response);
	} catch (error) {
		if (error instanceof MovieAlreadyExistsError) {
			return res.status(400).json({
				message: error.message,
				description: 'The id is in database',
			});
		}
		next(error);
	}
});

router.get('/', async (req, res) => {
	res.status(200).json({'test': 'test'});
});

router.get('/omdb/:omdb_id', async (req, res) => {
	const {omdb_id} = req.params;
	try {
		const command = new FindMovieByOmdbId({omdb_id});
		const findMovieByOmdbId = container.resolve('findMovieByOmdbId');
		const response = await findMovieByOmdbId.find(command);
		res.status(200).json({...response});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: error.toString()});
	}
});


module.exports = router;
