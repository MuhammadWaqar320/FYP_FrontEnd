import { Grid, Hidden } from '@material-ui/core'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/fyplogo.PNG';
const Footer=()=>
{
    return (<>
    <div className="FooterClass" >
    <Grid direction="row" container align="center" justify="center">
          <Grid item >
              <h3 style={{color:'#ffca44'}}>Follow us</h3>
        

<a class="btn btn-primary " style={{backgroundColor:" #0082ca",borderRadius:'50%',marginRight:'5px'}} href="https://www.linkedin.com/in/muhammad-waqar-195546207" role="button"
  ><i class="fab fa-linkedin-in socialMedia"></i
></a>

<a class="btn btn-primary" style={{backgroundColor: "#25d366",borderRadius:'50%',marginRight:'5px'}} href="https://wa.me/923445473320" role="button"
  ><i class="fab fa-whatsapp socialMedia"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#3b5998",borderRadius:'50%',marginRight:'5px'}} href="https://touch.facebook.com/profile.php" role="button"
  ><i class="fab fa-facebook-f socialMedia"></i
> </a>
<a class="btn btn-primary" style={{backgroundColor: "#ac2bac",borderRadius:'50%'}} href="https://www.instagram.com/m.waqar.c123/" role="button"
  ><i class="fab fa-instagram socialMedia"></i
></a>
          </Grid>
    </Grid>
    <hr></hr>
    <Grid container>
       
       <Hidden smDown="true"> < Grid item md={3} sm={12} xs={12}  style={{paddingLeft:'2%',marginBottom:'15px'}}>
       <NavLink to="#" >      <img src={Logo} width="60%"></img></NavLink>
            <h3 style={{marginTop:'40px',color:'#ffca44'}}>About PakElectronics</h3>
            <p >Pak PakElectronics is an online B2C marketplace where buyers and seller from around the world can connect and carry out transactions. It is a secure, trusted platform that is used by millions and millions of businesses. It was created in 2021.</p>
            
       </Grid></Hidden>
       < Grid item md={3} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}}> 
        <h3 style={{color:'#ffca44',marginBottom:'30px'}} className="line"> Quick Links</h3>
        <div style={{marginLeft:'5px'}}>
                <h6 ><NavLink to="#" className="footerMenu"> <i class="fa fa-home"></i> Home</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"><i class="fa fa-user"></i> Login</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"><i class="fa fa-list" aria-hidden="true" ></i> Categories</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"><i class="fa fa-shopping-bag"></i> Shop Now</NavLink></h6>

           
            </div>
        </Grid>
        < Grid item md={3} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}}>
          
            <h3 style={{color:'#ffca44',marginBottom:'30px'}} className="line"> Support</h3>
            <div style={{marginLeft:'3px'}}>
                <h6 > <NavLink to="#" className="footerMenu"><i class="fa fa-question-circle" aria-hidden="true" > </i> FAQ</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"><i class="fa fa-truck"></i> Shipping Detail</NavLink></h6>
                <h6 > <NavLink to="#" className="footerMenu"> <i class="fa fa-user-secret" aria-hidden="true" ></i> Privacy Policy</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"> <i class="fa fa-question" aria-hidden="true" ></i> How to order?</NavLink></h6>
              

            </div>
             </Grid>
        < Grid item md={3} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}}> 
        <h3 style={{color:'#ffca44',marginBottom:'30px'}} className="line"> Contact Us</h3>
        <div style={{marginLeft:'5px'}}>
                <h6 ><NavLink to="/contactus" className="footerMenu"><i class="fa fa-comment"></i> Contact US</NavLink></h6>
                <h6 ><i class="fa fa-envelope"></i> pakelectronics@gmail.com</h6>
                <h6 ><i class="fa fa-phone"></i> +92-334-5473329</h6>
                <h6 ><i class="fa fa-fax"></i> +051-3251-759</h6>


            </div>
      
        </Grid>
     

    </Grid>
 
    <Grid container direction="row" justify="center" align="center">
        < Grid item md={12} sm={12} xs={12} >
                 <div className="sharethis-inline-share-buttons" style={{paddingBottom:"20px",paddingTop:'20px'}}></div>
        </Grid>
       
    </Grid>
    <hr></hr>
    <Grid container direction="row" justify="center"  align="center">
        < Grid item md={12} sm={12} xs={12} >	<p style={{color: "white"}}>Copyright 2021 PakElectronics<span style={{color: "#ffca44"}}> &copy;
									</span>All Rights Reserved</p> 
                                    <hr></hr>
                                    </Grid>
       
    </Grid>

    </div>
  
    
    </>)
}
export default Footer