import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';

// pages
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Header/>


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/services">
          <h1>services</h1>
        </Route>

        <Route exact path="/contact">
          <h1>contact</h1>
        </Route>

        <Route exact path="/about">
          <h1>about</h1>
        </Route>

        <Route exact>
          <h1>404 Error</h1>
        </Route>

      </Switch>
    
    </Router>
  );
}

export default App;
