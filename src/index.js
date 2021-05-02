import React from "react";
import ReactDOM from "react-dom";
import TestContainer from "./container/TestContainer";
import TestContainer_2 from "./container/TestContainer-2";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from "./store/user_reducer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./container/Authentication/LoginPage";
import SignupPage from "./component/Authentication/SignupPage";
const rootElement = document.getElementById("root");

const rootReducer = combineReducers({
  userReducer: userReducer
});
const store = createStore(rootReducer);
const routing = (
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={LoginPage} />
      <Route path="/test" component={TestContainer} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Provider>
  </Router>
);

ReactDOM.render(routing, rootElement);
