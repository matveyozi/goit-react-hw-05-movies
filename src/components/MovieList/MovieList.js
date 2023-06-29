import { Link, useLocation } from 'react-router-dom';
import { StyleList, /* StyleListItem */ } from './MovieListStyle.styled';
import { ContainerStyled } from 'components/Container/Container.styled';
import MovieListItem from './MovieListItem';
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ContainerStyled>
      <StyleList>
        {console.log(movies)}
        {movies.map((item) => {
          return <Link key={item.id} to={`/movies/${item.id}`} state={{ from: location }}>
            <MovieListItem  element={item} >
            </MovieListItem>
          </Link>
        })}
      </StyleList>
    </ContainerStyled>


  )
}
