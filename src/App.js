
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
   <ScrollToTop/>
    <Switch>
      <Route path="/" exact component={Main} />
      

      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;
