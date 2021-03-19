import React from 'react';
import MovieListItem from './movieListItem';

const MovieList = (props) => {
	const movieItems = props.movies.map((movie) => {
		return (
			<MovieListItem
			movie = {movie}
			key = {movie.imdbID} />
		);
	});

	return (
		<ul>
			{ movieItems }
		</ul>
	)
};

export default MovieList;