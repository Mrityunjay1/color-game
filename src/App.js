
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserDetails from './UserDetails';

function App() {
  return (
    <Router>
    <div className="App">
     <h1>Users</h1>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/resources' exact component={Home} />
       <Route path="/resources/:id" exact component={UserDetails} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
