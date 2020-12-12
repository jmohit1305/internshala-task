import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";

function App() {
  return (
    <Router>
      <div>
        <Redirect to="/signin" />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
