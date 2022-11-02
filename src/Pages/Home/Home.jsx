import { getTrending } from 'helpers/Api';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      setMovie(data);
    };
    getData();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending to day</h2>
      <ul className={css.list}>
        {movie?.map(item => (
          <li key={item.id} className={css.item}>
            <NavLink to={`/movies/${item.id}`}>{item.original_title}</NavLink>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
              width="200"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
