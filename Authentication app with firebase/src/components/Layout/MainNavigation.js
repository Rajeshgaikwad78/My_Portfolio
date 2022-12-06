import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../Store/Auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isloggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>DailyExpenseNotes</div>
      </Link>
      <nav>
        <ul>
          {!isloggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isloggedIn && (
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          )}

          {isloggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isloggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
