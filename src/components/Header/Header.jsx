import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  const activeClassNameNav = ({ isActive }) =>
    isActive ? css.active : css.link;
  return (
    <>
      <header className={css.header}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/" end className={activeClassNameNav}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" end className={activeClassNameNav}>
              Movie
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
