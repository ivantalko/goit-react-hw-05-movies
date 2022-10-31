import axios from 'axios';
const filmsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b34c99781c631df09e26e195a62092d4',
  },
});
export const getTrending = async () => {
  const { data } = await filmsApi.get('/trending/movie/day');

  return data.results;
};

export const getMovies = async () => {
  const { data } = await filmsApi.get('/movies/:movie_id');
  return data;
};
