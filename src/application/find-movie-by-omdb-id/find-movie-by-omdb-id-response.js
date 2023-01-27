
class FindMovieByOmdbIdResponse {
	constructor({
		id,
		omdb_id,
		adult,
		backrop_path,
		belongs_to_collection,
		budget,
		genres,
		homepage,
		imdb_id,
		original_language,
		original_title,
		overview,
		popularity,
		poster_path,
		production_companies,
		production_countries,
		release_date,
		revenue,
		runtime,
		spoken_languages,
		status,
		tagline,
		title,
		video,
		vote_average,
		vote_count,
	}) {
		this.id = id;
		this.omdb_id = omdb_id;
		this.adult = adult;
		this.backrop_path = backrop_path;
		this.belongs_to_collection = belongs_to_collection;
		this.budget = budget;
		this.genres = genres;
		this.homepage = homepage;
		this.imdb_id = imdb_id;
		this.original_language = original_language;
		this.original_title = original_title;
		this.overview = overview;
		this.popularity = popularity;
		this.poster_path = poster_path;
		this.production_companies = production_companies;
		this.production_countries = production_countries;
		this.release_date = release_date;
		this.revenue = revenue;
		this.runtime = runtime;
		this.spoken_languages = spoken_languages;
		this.status = status;
		this.tagline = tagline;
		this.title = title;
		this.video = video;
		this.vote_average = vote_average;
		this.vote_count = vote_count;
	}
}

module.exports = FindMovieByOmdbIdResponse;
