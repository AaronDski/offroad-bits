import { Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { React, useState, useEffect,  } from 'react';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import Navbar from './Navbar';

import './App.css';


function App() {
  const history = useHistory()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then(setUser);
      }
    });
  }, []);

  const onLogout = () => {
    setUser(false)
    
    history.push('/')
  }

  const onLogin = (user) => {
    setUser(user)
    
    history.push('/account')
  }



  return (
    <div className="App">
      <Navbar onLogout={onLogout}/>
      <Switch>
      <Route exact path="/login">
       <Login setUser={setUser} onLogin={onLogin}  />
      </Route>
      <Route exact path="/">
        <Home/>
       </Route> 
       <Route exact path="/account">
        <Account/>
       </Route> 



      </Switch>     
    </div>
  );
}

export default App;
