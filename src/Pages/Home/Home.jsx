import { getTrending } from 'helpers/helpers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      setMovie(data);

      return;
    };
    getData();
  }, []);
  const onHandleClick = e => {
    console.log(e.currentTarget.id);
  };
  return (
    <>
      <h2>HOME</h2>
      <ul>
        {movie?.map(item => (
          <li key={item.id} onClick={onHandleClick}>
            <Link to="/movies">{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
