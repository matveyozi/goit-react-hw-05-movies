import { Link, useLocation } from 'react-router-dom';
import { StyleListItem } from './MovieListStyle.styled';
export default function MovieList({movies}) {
  const location = useLocation();


  return (
    <ul>
      <ul>
        {movies.map(({id, title, name}) => {
          return <StyleListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>{title || name}</Link>
          </StyleListItem>
        })}
      </ul>
  </ul>
  )
}
