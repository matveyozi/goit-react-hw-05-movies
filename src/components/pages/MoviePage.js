import { getSearch } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
export default function MoviePage() {

	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams();
	const movieName = searchParams.get('movieName') ?? '';
	useEffect(() => {
		if (!movieName) return;
		getSearch(movieName).then(({ results }) => setMovies(results))
	}, [movieName])
	//   /movies/:movieName
	

	const submitForm = (e) => {
		e.preventDefault()
		const movieNameValue = e.target.elements.search.value;
		if (movieNameValue === '') {
			return setSearchParams({})
		} else {

			setSearchParams({ movieName: movieNameValue })
		}

	}


	return (
		<>
			<form onSubmit={submitForm}>
				<input type='text' placeholder='Search...' name='search' />
				<button type='submit'>GO</button>
			</form>
		
			<MovieList key={nanoid()} movies={movies} />
		</>
	)
}
