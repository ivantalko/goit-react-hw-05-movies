import { getCastMovie } from 'helpers/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [castMove, setCastMove] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      const data = await getCastMovie(movieId);
      setCastMove(data.cast);
    };
    getCast();
  }, [movieId]);
  return (
    <>
      {castMove && (
        <ul className={css.list}>
          {castMove?.map(item => (
            <li key={item.id} className={css.item}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path} `
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                }
                alt={item.name}
                width="70"
              />
              <p className={css.text}>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
