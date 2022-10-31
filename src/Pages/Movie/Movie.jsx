import { getMovies } from '../../helpers/helpers.js';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();
      setMovie(data);
      console.log(data);
    };

    getData();
  }, []);

  return (
    <>
      {movie.map(item => (
        <div key={item.id}>
          Movie
          <h1>Title</h1>
          <img src="" alt="" />
          <p>User score:</p>
          <h2>Overview</h2>
          <p></p>
          <h2>Genres</h2>
          <p></p>
          <p>Additional information</p>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>
      ))}
    </>
  );
};
