
import React from 'react'
import '../../App.css'
import SearchBarCompoent from './SearchBar';
import { NavLink } from 'react-router-dom';
const BottomNavBar=()=>
{
    return (<>

    <div class="BottomNavBar">
    <NavLink to="#home" ><i class="fa fa-home" ></i><br></br><span>Home</span></NavLink>
  <NavLink to="#home" ><i class="fa fa-user"></i><br></br><span>Profile</span></NavLink>
  <NavLink to="#home" ><i class="fa fa-shopping-cart" ></i><br></br><span>Cart</span></NavLink>
  <NavLink to="#home" ><i class="fa fa-sign-in" ></i><br></br><span>Login</span></NavLink>
  <NavLink to="#home" ><i class="fa fa-shopping-bag" ></i><br></br><span>Shop</span></NavLink>
 


</div>

    
    </>)
}
export default BottomNavBar