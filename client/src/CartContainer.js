import Cart from "./Cart";

function CartContainer({
  user,
  cartArr,
  onMessDelete,
  onDelete,
  handleAddMessage,
}) {
  const view =
    cartArr === [] ? <p>Add your First Itme to Your Watch List</p> : null;
  const filteredCart =
    user !== [] ? (
      cartArr.filter((item) => item.user_id === user.id)
    ) : (
      <p>Login To create a watchlist</p>
    );
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
    <>
      <p>{view}</p>
      <p>{renderCart}</p>
    </>
  );
}

export default CartContainer;
