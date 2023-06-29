import React from 'react'
import { StyleListItem } from './MovieListStyle.styled'
import { genresList } from 'services/genresList';
import css from './MovieListItem.module.scss'
const MovieListItem = ({ element }) => {
	function genresGalleryFormat(array) {
		const genreResult = genresList.reduce((acc, element) => {
			if (Array.isArray(array) && array.includes(element.id)) {
				acc.push(element.name);
			}
			return acc;
		}, []);

		if (!genreResult.length) {
			return 'Unknown genre';
		} else if (genreResult.length > 2) {
			return `${genreResult[0]}, ${genreResult[1]}...`;
		} else {
			return genreResult.join(', ');
		}
	}
	const genre = genresGalleryFormat(element.genre_ids);


	return (

		 <StyleListItem>
			<img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt={element.title || element.name
            } width="380" height="574" className={css['gallery__item-img']} />
			<p className={css['gallery__item-descr']}>
				<span className={css['gallery__item-name']}>
					${element.title || element.name}
				</span>
				<span className={css['gallery__item-genres']}>
					${genre} | {(element.release_date || element.first_air_date).slice(0, 4) ?? ''
					}
				</span>
			</p>
		</StyleListItem >
	)
}

export default MovieListItem