import { getDetails } from 'api/api';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { ButtonToBack } from './DetailsStyle.styled';
import { ContainerStyled } from 'components/Container/Container.styled';
import css from './CSS.module.scss'

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
		<ContainerStyled>
			<ButtonToBack to={backLinkLocationRef.current}>Go to back</ButtonToBack>
			<div className={css.details}>
			<img className={css['details__img']} alt={title || name || 'no name'} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'NO POST'} />
				<h2 className={css['details__title']}> {title || name || 'no name'} {release_date?.split('-')[0] || 'dsa'}
				</h2>
				<h4>Overview:</h4>
				<p>{overview}</p>
				<h4>Genres:</h4>
				<p>{genres}</p>
			</div>
				<h2>Additional information</h2>
				<ul>
					<li>
						<Link to={'cast'}>Cast</Link>

					</li>
					<li>
						<Link to={'reviews'}>Reviews</Link>
					</li>
				</ul>
			
				<Suspense fallback={<div>Loading SUBPAGE...</div>}>
					<Outlet />
				</Suspense>
		</ContainerStyled>
	)
}
