import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import configureStore from "./store/configureStoret";
import Main from "./components/Main";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
