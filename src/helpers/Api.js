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

export const getMoviesDetales = async id => {
  const response = await filmsApi.get(`/movie/${id}`);
  return response.data;
};

export const getCastMovie = async id => {
  const { data } = await filmsApi.get(`/movie/${id}/credits`);
  return data;
};
export const getMovieSearchName = async params => {
  const { data } = await filmsApi.get('/search/movie', { params: params });
  return data;
};
export const getReviewMovie = async id => {
  const { data } = await filmsApi.get(`/movie/${id}/reviews`);

  return data;
};
