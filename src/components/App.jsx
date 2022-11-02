import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('Pages/Home/Home'));
const Header = lazy(() => import('./Header/Header'));
const Movies = lazy(() => import('Pages/Movie/Movie'));
const MoviesDetalis = lazy(() => import('Pages/MovieDetalis/MovieDetalis'));
const Cast = lazy(() => import('Pages/Cast/Cast'));
const Reviews = lazy(() => import('Pages/Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetalis />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
