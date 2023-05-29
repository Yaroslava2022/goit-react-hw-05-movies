import { Outlet, Link } from "react-router-dom";
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
       <nav className= {css.nav}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};