import Cart from "./Cart";

function CartContainer({
  user,
  cartArr,
  onMessDelete,
  onDelete,
  handleAddMessage,
}) {
  const view =
    cartArr.length === 0 ? <p>Add your First Item to Your Watch List</p> : null;
    // console.log(user)
    // console.log(cartArr)
    const filteredCart = user ?
       cartArr.filter((item) => item.user_id === user.id) : []
  //   cartArr.length !== 0 && cartArr !== [] && user  ? (
  //     cartArr.filter((item) => item.user_id === user.id)
  //   ) : (
  //     <p>Login To create a watchlist</p>
  //   );
  const renderCart = filteredCart.map((item) => (
    <Cart
      item={item}
      user={user}
      onDelete={onDelete}
      handleAddMessage={handleAddMessage}
      onMessDelete={onMessDelete}
    />
  ));

  

  return (
    <div style={{background:'white', marginTop:'5vw', marginBottom:'10vw', marginLeft:'20vw'}}>
      {/* <p>{view}</p> */}
      {user.length !== 0 ?  <p>{view}{renderCart}</p> : <p> Please Login to create a Watchlist</p>}
    </div>
  );
}

export default CartContainer;
