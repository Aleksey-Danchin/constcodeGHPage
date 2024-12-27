import { Link } from "@tanstack/react-router";
import { ThemeSelector } from "./ThemeSelector";

export const Header = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to="/">
          ConstCode
        </Link>
      </div>

      {/* <div className="navbar-center"></div> */}

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Главная</Link>
          </li>

          <li>
            <Link to="/sites">Сайты</Link>
          </li>

          <li>
            <Link to="/courses">Курсы</Link>
          </li>
        </ul>

        <ThemeSelector />
      </div>
    </div>
  );
};
