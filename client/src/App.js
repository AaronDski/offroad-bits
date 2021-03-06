import { Route, Switch, useHistory } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Login from "./Login";
import HomeContainer from "./HomeContainer";
import Account from "./Account";
import Navbar from "./Navbar";
import "./App.css";
import CartContainer from "./CartContainer";
import Container from '@mui/material/Container';


function App() {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [fullPartList, setFullPartList] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [editPartForm, setEditPartForm] = useState("");
  const [messArr, setMessArr] = useState([]);

  useEffect(() => {
    fetch("/parts").then((r) => {
      if (r.ok) {
        r.json().then((data) => setFullPartList(data));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then(setUser);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/user_carts")
      .then((r) => {
        if (r.ok){
          r.json().then(setCartArr);
        } else{
          setCartArr([])
        }

      })
     
  }, []);

  useEffect(() => {
    fetch("/part_messages")
      .then((r) => r.json())
      .then(setMessArr);
  }, []);

  function handleAddMessage(e, list, user, messContent, messSub) {
    e.preventDefault();
    const pmContent = {
      subject: messSub,
      content: messContent,
      user_id: user.id,
      part_id: list.id,
    };
    console.log(pmContent);
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pmContent),
    };
    fetch("/part_messages", config)
      .then((r) => r.json())
      .then((data) => setMessArr([...messArr, data]))

      .then(() =>
        fetch("/user_carts")
          .then((r) => r.json())
          .then(setCartArr)
      )
      .then(() =>
        fetch("/parts")
          .then((r) => r.json())
          .then(setFullPartList)
      );
  }

  function handleAddToCart(part, user) {
    console.log(part);
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
  }

  function handleAddPart(
    e,
    user,
    title,
    price,
    quantity,
    year,
    make,
    model,
    imageURL,
    description
  ) {
    e.preventDefault();
    console.log("clicked");
    const partItem = {
      user_id: user.id,
      title: title,
      make: make,
      model: model,
      year: year,
      price: price,
      quantity: quantity,
      image: imageURL,
      description: description,
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
  }
  function handleLogoutClick() {
    if (window.confirm("Are you sure you want to Logout?")) {
      fetch("/logout", {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setUser();
          history.push("/");
        }
      });
    }
  }

  function handleDeleteClick(id) {
    if (
      window.confirm("Are you sure you want to Remove from your Watchlist?")
    ) {
      fetch(`/user_carts/${id}`, {
        method: "DELETE",
      });
      const filteredCart = cartArr.filter((item) => item.id !== id);
      setCartArr(filteredCart);
    }
  }

  function removeListing(id) {
    if (window.confirm("Are you sure you want to Remove this Listing?")) {
      fetch(`/parts/${id}`, {
        method: "DELETE",
      });
      const filteredList = fullPartList.filter((item) => item.id !== id);
      setFullPartList(filteredList);
    }
  }
  function onMessDelete(id) {
    if (window.confirm("Are you sure you want to Remove this Message?")) {
      fetch(`/part_messages/${id}`, {
        method: "DELETE",
      })
        .then(() =>
          fetch("/user_carts")
            .then((r) => r.json())
            .then(setCartArr)
        )
        .then(() =>
          fetch("/parts")
            .then((r) => r.json())
            .then(setFullPartList)
        );
    }
  }
  function editListing(e, list, user, editForm) {
    e.preventDefault();
    const partItem = {
      user_id: user.id,
      title: editForm.title,
      make: editForm.make,
      model: editForm.model,
      year: editForm.year,
      price: editForm.price,
      quantity: editForm.quantity,
      image: editForm.image,
      description: editForm.description,
    };
    let config = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partItem),
    };
    fetch(`/parts/${list.id}`, config)
      .then((r) => r.json())
      .then((data) =>
        setFullPartList([
          ...fullPartList.filter((item) => item.id !== list.id),
          data,
        ])
      );
  }

  const onLogin = (user) => {
    setUser(user);

    history.push("/account");
  };

  return (
    <Container sx={{bgcolor:'white'}}>
      <Navbar handleLogoutClick={handleLogoutClick} user={user} />
      <Switch>
        <Route exact path="/login">
          <Login setUser={setUser} onLogin={onLogin} />
        </Route>
        <Route exact path="/">
          <HomeContainer
            fullPartList={fullPartList}
            handleAddToCart={handleAddToCart}
            user={user}
          />
        </Route>
        <Route exact path="/account">
          <Account
            user={user}
            setEditPartForm={setEditPartForm}
            editPartForm={editPartForm}
            handleAddPart={handleAddPart}
            full={fullPartList}
            removeListing={removeListing}
            editListing={editListing}
            handleAddMessage={handleAddMessage}
            onMessDelete={onMessDelete}
          />
        </Route>
        <Route exact path="/watchlist">
          <CartContainer
            user={user}
            cartArr={cartArr}
            full={fullPartList}
            onDelete={handleDeleteClick}
            handleAddMessage={handleAddMessage}
            onMessDelete={onMessDelete}
          />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
