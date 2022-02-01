import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MoviesGrid } from './MoviesGrid';

export const MoviesScreen = () => {
	const [movies, setmovies] = useState([]);
	const { token } = useSelector(state => state.auth);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/movies/list', {
			method: 'GET',
			headers: { 'Authorization': 'Bearer ' + token },
		})
			.then(res => res.json())
			.then(res => {
				setmovies(res.data);
			})
			.catch(err => console.log(err))
	}, [token]);

	return <div><h1>Movies</h1><br /><MoviesGrid movies={movies} /></div>;
};
