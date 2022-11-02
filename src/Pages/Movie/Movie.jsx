import { SearchForm } from 'components/SerchForm/SerchForm';
import { getMovieSearchName } from 'helpers/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') || '';
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await getMovieSearchName({ query });
      setMovie(data.results);
    };
    getData();
  }, [query]);

  const getFormData = data => {
    setSearchParams({ query: data });
  };

  const getFilmOnClick = e => {
    console.log(e.target.id);
    setMovie(e.target.id);
  };

  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id} onClick={getFilmOnClick}>
              <Link
                state={{ from: location }}
                to={`${item.id}`}
                id={item.id}
                className={css.movieLink}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
