import Cart from './Cart'

function CartContainer({user, cartArr, onDelete}){

    const renderCart = user !== [] ? cartArr.map(item => <Cart item={item} user={user} onDelete={onDelete} />) : <p>Login To create a watchlist</p>
    
    return(
        <p>{renderCart}</p>
    )
}

export default CartContainer