import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import { NavLink } from 'react-router-dom'


function Navbar(onLogout) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogoutClick = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then(onLogout)
  }

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab component={NavLink} to='/' icon={<StoreTwoToneIcon />} label="LISTINGS" />
      <Tab component={NavLink} to='/account' icon={<AccountCircleTwoToneIcon />} label="ACCOUNT" />
      <Tab component={NavLink} to='/cart' icon={<ShoppingCartTwoToneIcon />} label="CART" />
        <Tab component={NavLink} to='/' icon={<LogoutTwoToneIcon />} label="LOGOUT" onClick={handleLogoutClick}/>
        <Tab component={NavLink} to='/login' icon={<LogoutTwoToneIcon />} label="LOGIN" />

    </Tabs>
  );
}


export default Navbar