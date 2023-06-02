import { getDetails } from 'api/api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Cast() {
	const [movieCast, setMovieCast] = useState([])
	const { movieId } = useParams()

	useEffect(() => {
		
		getDetails(movieId, '/credits').then(({ cast }) => {
			
			return setMovieCast(cast)
		});

	}, [movieId])
	//   /movies/:movieId
	
	if (!movieCast) return;
	return <ul>
		
		{movieCast.map(({ id, name, character, profile_path }) => {
			return (
				<li key={id}>
					<img alt={character} src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'NO POST' } />
					<h3>{name}</h3>
					<h3>{character}</h3>
				</li>
			)
		})}
	</ul>
}
