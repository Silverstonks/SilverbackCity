import React from "react";
import HomePage from "./components/HomePage"
import { Provider } from "react-redux";
import configureStore from './store';


export const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
