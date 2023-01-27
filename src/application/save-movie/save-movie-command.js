class SaveMovieCommand {
	constructor({
		id,
		adult,
		backdrop_path,
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
		this._id = id;
		this._adult = adult;
		this._backdrop_path = backdrop_path;
		this._belongs_to_collection = belongs_to_collection;
		this._budget = budget;
		this._genres = genres;
		this._homepage = homepage;
		this._imdb_id = imdb_id;
		this._original_language = original_language;
		this._original_title = original_title;
		this._overview = overview;
		this._popularity = popularity;
		this._poster_path = poster_path;
		this._production_companies = production_companies;
		this._production_countries = production_countries;
		this._release_date = release_date;
		this._revenue = revenue;
		this._runtime = runtime;
		this._spoken_languages = spoken_languages;
		this._status = status;
		this._tagline = tagline;
		this._title = title;
		this._video = video;
		this._vote_average = vote_average;
		this._vote_count = vote_count;
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get adult() {
		return this._adult;
	}

	set adult(value) {
		this._adult = value;
	}

	get backdrop_path() {
		return this._backdrop_path;
	}

	set backdrop_path(value) {
		this._backrop_path = value;
	}

	get belongs_to_collection() {
		return this._belongs_to_collection;
	}

	set belongs_to_collection(value) {
		this._belongs_to_collection = value;
	}

	get budget() {
		return this._budget;
	}

	set budget(value) {
		this._budget = value;
	}

	get genres() {
		return this._genres;
	}

	set genres(value) {
		this._genres = value;
	}

	get homepage() {
		return this._homepage;
	}

	set homepage(value) {
		this._homepage = value;
	}

	get imdb_id() {
		return this._imdb_id;
	}

	set imdb_id(value) {
		this._imdb_id = value;
	}

	get original_language() {
		return this._original_language;
	}

	set original_language(value) {
		this._original_language = value;
	}

	get original_title() {
		return this._original_title;
	}

	set original_title(value) {
		this._original_title = value;
	}

	get overview() {
		return this._overview;
	}

	set overview(value) {
		this._overview = value;
	}

	get popularity() {
		return this._popularity;
	}

	set popularity(value) {
		this._popularity = value;
	}

	get poster_path() {
		return this._poster_path;
	}

	set poster_path(value) {
		this._poster_path = value;
	}

	get production_companies() {
		return this._production_companies;
	}

	set production_companies(value) {
		this._production_companies = value;
	}

	get production_countries() {
		return this._production_countries;
	}

	set production_countries(value) {
		this._production_countries = value;
	}

	get release_date() {
		return this._release_date;
	}

	set release_date(value) {
		this._release_date = value;
	}

	get revenue() {
		return this._revenue;
	}

	set revenue(value) {
		this._revenue = value;
	}

	get runtime() {
		return this._runtime;
	}

	set runtime(value) {
		this._runtime = value;
	}

	get spoken_languages() {
		return this._spoken_languages;
	}

	set spoken_languages(value) {
		this._spoken_languages = value;
	}

	get status() {
		return this._status;
	}

	set status(value) {
		this._status = value;
	}

	get tagline() {
		return this._tagline;
	}

	set tagline(value) {
		this._tagline = value;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	get video() {
		return this._video;
	}

	set video(value) {
		this._video = value;
	}

	get vote_average() {
		return this._vote_average;
	}

	set vote_average(value) {
		this._vote_average = value;
	}

	get vote_count() {
		return this._vote_count;
	}

	set vote_count(value) {
		this._vote_count = value;
	}
}

module.exports = SaveMovieCommand;
