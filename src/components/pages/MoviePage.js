import { getSearch } from 'api/api';
import { ContainerStyled } from 'components/Container/Container.styled';
import MovieList from 'components/MovieList/MovieList';
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaSearchengin } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { SearchButtonStyled, SearchFormStyled, SearchInputStyled } from './PagesStyled.styled';
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
		e.target.reset()
	}
	return (
		<>
			<ContainerStyled>
				<SearchFormStyled onSubmit={submitForm}>
					<SearchInputStyled placeholder='Search...' type='text'  name='search' />
					<SearchButtonStyled type='submit'><FaSearchengin/></SearchButtonStyled>
			</SearchFormStyled>
			</ContainerStyled>
		
			<MovieList key={nanoid()} movies={movies} />
		</>
	)
}
