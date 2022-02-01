import React from 'react';

export const MovieCard = ({ original_title, overview, release_date, title, vote_average, poster_path }) => {
	return (
		<div className="col-3 mb-3 mr-3 ">
			<div className="card" style={{ width: "18rem", textOverflow: "ellipsis" }}>
				<img src={"https://image.tmdb.org/t/p/w300" + poster_path} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{overview}</p>
					<a href="/" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	);
};
