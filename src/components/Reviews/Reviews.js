import { getDetails } from 'api/api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Reviews() {
	const [reviews, setReviews] = useState([])

	const { movieId } = useParams()
	useEffect(() => {
		getDetails(movieId, '/reviews').then(({results}) => {
			return setReviews(results)
		});

	}, [movieId])
	//   /movies/:movieId
	
	if (!reviews) return;
	return (
		<>
			<hr/>
		<ul>
		
		{reviews.map(({ author, content, id }) => {
			return (
				<li key={id}>
					<h3>{author}</h3>
					<p>{content}</p>
					
				</li>
			)
		})}
	</ul>
		
		</>
	)
}
