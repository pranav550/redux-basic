import React, { Component } from "react";
import Home from "./component/Home";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
