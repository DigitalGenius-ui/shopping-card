import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/cart" >
              <Cart/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
