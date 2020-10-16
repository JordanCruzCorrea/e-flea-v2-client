import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import "./tailwind.output.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route>
          {/* "/items" */}
        </Route>
        <Route>
          {/* `/items/:id` */}
        </Route>
        <Route>
          {/* `/items/:id/edit` */}
        </Route>
        <Route>
          {/* `/items/:id` */}
        </Route>
        <Route>
          {/* `/items/add` */}
        </Route>
        <Route>
          {/* `/login` */}
        </Route>
        <Route>
          {/* `/register` */}
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
