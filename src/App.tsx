import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import configureStore from "./store/configureStoret";
import Navigation from "./navigation";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
