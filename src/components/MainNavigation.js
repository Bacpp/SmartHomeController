import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bathroom"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Bathroom
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bedroom"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Bedroom
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/garage"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Garage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/livingroom"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Living Room
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kitchen"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Kitchen
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/garden"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Garden
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/frontdoor"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Frontdoor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/backdoor"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Backdoor
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
