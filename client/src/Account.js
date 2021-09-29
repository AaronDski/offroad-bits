

function Account({user}) {
    console.log(user)

    const renderAcc = user  ? (<p>Hello {user.name}</p>) : (<p>Please login or sign up to view account</p>)

    return (<>{renderAcc}</>);



}

export default Account