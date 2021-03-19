import React from 'react';

const MovieListItem = (props) => {
	return (
		<div className='card'>
			<img className="card-img" src={props.movie.Poster} alt={props.movie.Title}/>
			<p className="small-text">{props.movie.Title}</p>
			<p className="small-text">{props.movie.Year}</p>
            <p className="small-text">{props.movie.Type}</p>
		</div>
	)
}

export default MovieListItem;