import { getDetails } from 'api/api';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { ButtonToBack } from './DetailsStyle.styled';


export default function MovieDetails() {
	const [movie, setMovie] = useState({})
	const { movieId } = useParams();

	const location = useLocation();
	const backLinkLocationRef = useRef(location.state?.from ?? '/movies')

	useEffect(() => {
		getDetails(movieId).then(res => {
			setMovie(res);
			
		})
	}, [movieId])
	
	if (!movie) return;
	
	const {  title, name, release_date,  overview, poster_path } = movie;
	const genres = movie.genres?.map(genre => genre.name).join(', ');
	return (

		<>
			

			<ButtonToBack to={backLinkLocationRef.current}>Go to back</ButtonToBack>
			<img alt={title || name || 'no name'} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'NO POST'} />
			<h2> {title || name || 'no name'} {release_date?.split('-')[0] || 'dsa'}
			</h2>
			<hr />
			<h4>Overview</h4>
			<p>{overview}</p>
			<h4>Genres</h4>
			<p>{genres}</p>
			<h2>Additional information</h2>
			<ul>
				<li>
					<Link to={'cast'}>Cast</Link>

				</li>
				<li>
					<Link to={'reviews'}>Reviews</Link>
				</li>
			</ul>
			<hr />
			<Suspense fallback={<div>Loading SUBPAGE...</div>}>
				<Outlet />
			</Suspense>

		</>
	)
}
