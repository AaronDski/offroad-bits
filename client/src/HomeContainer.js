import Home from './Home';

function HomeContainer ({fullPartList, handleAddToCart, user}){

    const renderParts = fullPartList !== [] ?  fullPartList.map(part =>  <><Home part={part} handleAddToCart={handleAddToCart} user={user}/></>) : console.log('Loading')

    return (<>{renderParts}</>);
}

export default HomeContainer