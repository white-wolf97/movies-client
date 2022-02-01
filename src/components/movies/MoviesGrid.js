import React from 'react';
import { MovieCard } from './MovieCard';

export const MoviesGrid = ({ movies }) => {
	console.log(movies);
	return (
		<div className="container">
			<div className="row">
				{movies.map((movie) => (<MovieCard key={movie.id} {...movie} />))}
			</div>
		</div>
	);
};
