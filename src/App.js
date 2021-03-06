import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
        </Switch>

      </Router>
    
    </>
  );
}

export default App;
