import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from '../Images/fyplogo.PNG'
import { NavLink } from 'react-router-dom';
import '../../App.css'

const NavBar=()=>
{
    return (<>
    <nav className="navbar navbar-expand-lg NavigationBar" style={{backgroundColor:"#081333",paddingLeft:'2%',paddingRight:'2%'}}>
    <NavLink className="navbar-brand" to="">
    <img src={Logo}   alt="WebSite Logo" className="LogoClass"></img>
  </NavLink>
  <button className="navbar-toggler " style={{border:'1px solid white',borderRadius:'3px',marginRight:'5px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <span class="navbar-toggler-icon">   
    <i class="fas fa-bars" style={{color:"#fff", fontSize:"25px",marginTop:'3px'}}></i>
</span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mr-4" >
      <li className="nav-item active">
        <NavLink className="nav-link MenuItem" to="/"><i class="fa fa-home" style={{fontSize:'18px',fontWeight:'normal',textDecoration:'none'}}> Home</i> </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/contactus" ><i class="fa fa-comment" style={{fontSize:'18px',fontWeight:'normal'}}> Contact Us </i> </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/faq" ><i class="fa fa-question-circle" aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> FAQ</i></NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="#" ><i class="fa fa-user-secret" aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> Privacy Policy</i></NavLink>
      </li>
      <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle MenuItem" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
         <i class="fa fa-list" aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> Categories</i>
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="dropdown-item MenuItem1" to="#" style={{borderBottom:'1px solid silver'}}>Mobiles</NavLink></li>
            <li><NavLink class="dropdown-item MenuItem1" to="#" style={{borderBottom:'1px solid silver'}}>Computers</NavLink></li>
            <li><NavLink class="dropdown-item MenuItem1" to="#" style={{borderBottom:'1px solid silver'}}>Laptops</NavLink></li>
             <li><NavLink class="dropdown-item MenuItem1" to="#" style={{borderBottom:'1px solid silver'}}>Cameras</NavLink></li>
             <li><NavLink class="dropdown-item MenuItem1" to="#" style={{borderBottom:'1px solid silver'}}>LCDs</NavLink></li>
             <li><NavLink class="dropdown-item MenuItem1" to="#">Accessories</NavLink></li>

            
          </ul>
        </li>

   
    </ul>
    <form class="form-inline">

    <button class="btn btn-outline-light my-2 my-sm-0" type="submit" style={{fontFamily:'initial',fontWeight:'bold'}}>Login/Register</button>
  </form>
  </div>
</nav>
<i class="fa-solid fa-house"></i>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:'#f1f2f6',width:'75%'}}>
        <div class="offcanvas-header" style={{backgroundColor:'#081333',marginBottom:'0px',height:'66px'}}>
        <NavLink className="navbar-brand" to="#">
    <img src={Logo}   alt="WebSite Logo" style={{width:'170px'}}></img>
  </NavLink>
          <button type="button" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div class="offcanvas-body" >
          
        <div id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4" >
      <li className="nav-item active" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#"><i class="fa fa-home" style={{fontSize:'16px',fontWeight:'normal'}}> Home</i> </NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-comment" style={{fontSize:'16px',fontWeight:'normal'}}> Contact Us </i> </NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-question-circle" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> FAQ</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-shopping-bag" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Shop Now</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-user-secret" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Privacy Policy</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-text-height" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Term and Conditions</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-truck" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Shipping Detail</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-user" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> My Profile</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-question" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> How To Order?</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i class="fa fa-sign-in" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Login/Register</i></NavLink>
      </li>
      <li class="nav-item dropdown MenuDrawerItem" style={{borderBottom:'1px solid #b3bdc9'}}>
          <NavLink class="nav-link dropdown-toggle MenuDrawerItem" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-list-alt" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Categories</i>
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="dropdown-item DropClass" to="#" style={{borderBottom:'1px solid silver'}}>Laptops</NavLink></li>
            <li><NavLink class="dropdown-item" to="#" style={{borderBottom:'1px solid silver'}}>Computers</NavLink></li>
            <li><NavLink class="dropdown-item" to="#" style={{borderBottom:'1px solid silver'}}>Mobiles</NavLink></li>
            <li><NavLink class="dropdown-item" to="#" style={{borderBottom:'1px solid silver'}}>LCDs</NavLink></li>
            <li><NavLink class="dropdown-item" to="#" style={{borderBottom:'1px solid silver'}}>Cameras</NavLink></li>
            <li><NavLink class="dropdown-item" to="#" >Accessories</NavLink></li>
          </ul>
        </li>
    </ul>
  
  </div>
        </div>
      </div>
    </>)
}
export default NavBar