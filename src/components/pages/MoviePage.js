import { getSearch } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
export default function MoviePage() {

	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams();
	const movieName = searchParams.get('movieName') ?? '';
	console.log(movieName);
	useEffect(() => {
		if (!movieName) return;
		getSearch(movieName).then(({ results }) => setMovies(results))
	}, [movieName])
	//   /movies/:movieName
	const location = useLocation()

	const submitForm = (e) => {
		e.preventDefault()
		const movieNameValue = e.target.elements.search.value;
		if (movieNameValue == '') {
			return setSearchParams({})
		} else {

			setSearchParams({ movieName: movieNameValue })
		}

		// const nextParams = name !== '' ? { name } : {};
		// setSearchParams(nextParams)
	}



	// console.log(location)

	return (
		<>
			<form onSubmit={submitForm}>
				<input type='text' name='search' />
				<button type='submit'>GO</button>
			</form>
		{console.log(movies)}
			<MovieList movies={movies} />
		</>
	)
}
