import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* 
              The <Switch /> component will 
              only render the first route that matches/includes the path.
               Once it finds the first route that matches the path, 
               it will not look for any other matches. Not only that,
                it allows for nested routes to work properly, which is
                 something that <Router /> will not be able to handle.*/}

        <Switch>
          {/*
        path:the url.
        exact: exactly the url must match.
        */}

          <Route path="/" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*
        path:* refers that it will always match
        */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
