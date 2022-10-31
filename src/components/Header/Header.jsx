import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  <header className={css.header}>
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies"></NavLink>
      </li>
    </ul>
  </header>;
};
