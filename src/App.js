
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main';
import ScrollToTop from './utils/ScrollToTop';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
   <ScrollToTop/>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contacts" exact component={Contacts} />

      <Redirect to="/" />
    </Switch>
  </Router>
  );
}

export default App;
