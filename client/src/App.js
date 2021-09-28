import { Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import Account from './Account';

import './App.css';


function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          
          // history.push('/account')
        });
      }
    });
  }, []);



  return (
    <div className="App">
      <Switch>
      <Route exact path="/login">
       <Login setUser={setUser} />
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
