import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Summary from "../components/Summary";
import Details from "../components/Details/Details";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/users";

function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Summary</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Summary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
