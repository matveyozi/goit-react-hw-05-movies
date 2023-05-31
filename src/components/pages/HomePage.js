import { getDetails, getTrend } from 'api/api'
import MovieList from 'components/MovieList/MovieList'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
	const [movies, setMovies] = useState([])

	// getDetails(569094).then(res=> console.log(res))

	useEffect(() => {
		getTrend().then(({results}) => {
		return	setMovies(results)
		})
	}, [])
	return (
		<>
			<h1>Trend</h1>
			<hr/>
			<MovieList movies={movies} />
		</>
	)
}
