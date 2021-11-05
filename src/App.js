
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
