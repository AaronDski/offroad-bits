import { Route, Switch, useHistory, } from 'react-router-dom';
import { React, useState, useEffect,  } from 'react';
import Login from './Login';
import HomeContainer from './HomeContainer';
import Account from './Account';
import Navbar from './Navbar';
import Cart from './Cart';

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

    // console.log(fullPartList)

    useEffect(() => {
      fetch('/user_carts')
      .then((r) => r.json())
      .then(setCartArr)
      
    },[]);


    function handleAddToCart(part, user) {
      console.log(part)
      const cartItem = {
        user_id: user.id,
        part_id: part.id,
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
        console.log(cartArr)
    }

    function handleAddPart(e, user, title, price, quantity, year, make, model,  image, description) {
      e.preventDefault()
      console.log('clicked')
      const partItem = {
        user_id: user.id,
        title: title,
        make: make,
        model: model,
        year: year,
        price: price,
        quantity: quantity,
        image: image,
        description: description
      };
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partItem),
      };
      fetch("/parts", config)
        .then((r) => r.json())
        .then((data) => setFullPartList([...fullPartList, data]));
        console.log(fullPartList)
        console.log("added")
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

  function handleDeleteClick(id) {
    fetch(`/user_cart/${id}`, {
      method: "DELETE",
    });
    const filteredCart = cartArr.filter((item) => item.id !== id);
    setCartArr(filteredCart);
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
        <Account user={user}  handleAddPart={handleAddPart}/>
       </Route> 
       <Route exact path="/cart">
        <CartContainer user={user} cartArr={cartArr} onDelete={handleDeleteClick}/>
       </Route>


      </Switch>     
    </div>
  );
}

export default App;
