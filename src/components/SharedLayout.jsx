import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loader/Loading";
import css from './SharedLayout.module.css';
const SharedLayout = () => {
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
      <Suspense fallback={<Loading />}>
      <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;