import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import configureStore from "./store/configureStoret";
import Summary from "./components/Summary";
import Details from "./components/Details/Details"

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
    </Provider>
  );
}

export default App;
