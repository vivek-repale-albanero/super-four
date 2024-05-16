import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import "./styles/styles.scss";
import "./styles/overrides.scss";
import "./styles/variables.scss";

export default function Root() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/auth/login" />} />
          <Route
            exact
            path="/auth/login"
            render={() => <>Catch me if you can</>}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}
