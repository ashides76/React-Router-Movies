import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function MovieList(props) {
  const navigate = useNavigate();
  const onClickMovie = id => () => {
    navigate(`movies/${id}`);
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails 
          key={movie.id} 
          movie={movie} 
          link={<Link to={`movies/${movie.id}`}>Details</Link>} 
          onClickMovie={onClickMovie(movie.id)}
        />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { onClickMovie, link } = props

  return (
    <div className="movie-card" onClick={onClickMovie}>
      <h2>{title}</h2>
      {link}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
