import Cart from './Cart'

function CartContainer({user, cartArr}){

    const renderCart = user !== [] ? cartArr.map(item => <Cart item={item} user={user} />) : <p>Loading Cart</p>
    
    return(
        <p>{renderCart}</p>
    )
}

export default CartContainer