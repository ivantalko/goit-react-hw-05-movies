import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesDetales } from 'helpers/Api';

const MoviesDetalis = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (!movieId) return;
    const getIDmovie = async () => {
      const data = await getMoviesDetales(movieId);
      setMovie(data);
    };
    getIDmovie();
  });
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>
        {movie.original_title} {movie?.release_date?.slice(0, 4)}
      </h2>
      <p>User Score: {movie.popularity}%</p>
      <p>
        <span>Overview</span>
        {movie.overview}
      </p>
      <span>Genres</span>
      <ul>
        {movie?.genres?.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Additional informathion</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location?.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location?.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetalis;
