import { Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { React, useState, useEffect,  } from 'react';
import Login from './Login';
import HomeContainer from './HomeContainer';
import Account from './Account';
import Navbar from './Navbar';

import './App.css';
import CartContainer from './CartContainer';


function App() {
  const history = useHistory()
  const [user, setUser] = useState([])
  const [fullPartList, setFullPartList] = useState([])
  const [cartArr, setCartArr] = useState([])

  
  useEffect(() => {
      fetch('/parts')
      .then((r) => {
        if(r.ok) {
          r.json().then(data => setFullPartList(data))
        }
      })
      
    },[]);

    console.log(fullPartList)

    // useEffect(() => {
    //   fetch('http://localhost:3000/cart')
    //   .then((r) => r.json())
    //   .then(setCartArr)
    // },[]);
    function handleAddToCart(part, user) {
      const cartItem = {
        user_id: user.id,
        part_id: part.id,
        title: part.title,
        make: part.make,
        model: part.model,
        year: part.year,
        price: part.price,
        quantity: part.quantity,
        image: part.image,
        description: part.description
      };
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      };
      fetch("/user_carts", config)
        .then((r) => r.json())
        .then((data) => setCartArr([...cartArr, data]));
    }

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then(setUser);
      }
    });
  }, []);

  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        setUser()
        history.push('/')
      }
    })
  }

  const onLogin = (user) => {
    setUser(user)
    
    history.push('/account')
  }



  return (
    <div className="App">
      <Navbar handleLogoutClick={handleLogoutClick}/>
      <Switch>
      <Route exact path="/login">
       <Login setUser={setUser} onLogin={onLogin}  />
      </Route>
      <Route exact path="/">
        <HomeContainer fullPartList={fullPartList} handleAddToCart={handleAddToCart} user={user}/>
       </Route> 
       <Route exact path="/account">
        <Account user={user}/>
       </Route> 
       <Route exact path="/cart">
        <CartContainer user={user} cartArr={cartArr}/>
       </Route>


      </Switch>     
    </div>
  );
}

export default App;
