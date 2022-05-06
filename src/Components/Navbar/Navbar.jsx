import { ReactComponent as HackademyLogo } from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

function FancyMenuItem({ to, children }) {
  return (
    <li className={styles.item}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function MainMenu() {
  return (
    <ul className={styles.menu}>
      <Link to="/">
        <HackademyLogo width="1em" height="1em" />
      </Link>
      <FancyMenuItem to="/useState">useState</FancyMenuItem>
      <FancyMenuItem to="/useEffect">useEffect</FancyMenuItem>
      <FancyMenuItem to="/useContext">useContext</FancyMenuItem>
      <FancyMenuItem to="/useRef">useRef</FancyMenuItem>
      <FancyMenuItem to="/useReducer">useReducer</FancyMenuItem>
      <FancyMenuItem to="/useMemo">useMemo</FancyMenuItem>
      <FancyMenuItem to="/useCallback">useCallback</FancyMenuItem>
      <FancyMenuItem to="/useLayoutEffect">useLayoutEffect</FancyMenuItem>
      {/* <FancyMenuItem to="/useImperativeHandle">
        useImperativeHandle
      </FancyMenuItem>
      <FancyMenuItem to="/useDebugValue">useDebugValue</FancyMenuItem> */}
      <FancyMenuItem to="/ErrorBoundary">Error Boundaries</FancyMenuItem>
    </ul>
  );
}
