import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { Header } from './Header/Header';
import { Movies } from 'Pages/Movie/Movie';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
      </Routes>
    </>
  );
};
