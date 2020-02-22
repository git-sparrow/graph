import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import configureStore from "./store/configureStoret";
import Navigation from "./navigation";
import Details from "./components/Details/Details";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
     <Details />
    </Provider>
  );
}

export default App;
