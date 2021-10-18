import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import lpImage from '../Images/laptop1.webp';
import { Button } from "@mui/material";


import { NavLink } from "react-router-dom";
import '../../App.css';
const BeautifullLaptop=()=>
{
    return (<>
    <Paper style={{marginTop:'0.5%'}} >
           <Grid container direction="row" justify="center" align="center">
           <Grid item md={3} className="Offer1" style={{paddingTop:'195px'}}>
           <NavLink to="#" style={{textDecoration:'none'}}>     <Button  variant="contained" className="SignInClass" style={{background:'#ffca44',color:'black',borderRadius:'20px',textTransform:'capitalize',fontSize:'14px'}}>Shop Now</Button></NavLink>
            </Grid>
               <Grid item md={7}>
                   <Grid container direction="row" justify="center" align="center">
                       <Grid item md={8}> <img src={lpImage} height="250px"></img></Grid>
                       <Grid item md={4} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
  <span style={{fontSize:'30px',fontWeight:'bold'}}> Beautiful Laptops</span>
  <span style={{color:'#035efc',fontWeight:'bold',fontSize:'18px'}}>RETINA DISPLAY 18 READY!</span><br></br>
             <NavLink to="#" style={{textDecoration:'none'}}>     <Button  variant="contained" className="SignInClass" style={{borderRadius:'20px',background:'#ffca44',width:'150px',color:'black',textTransform:'capitalize',fontSize:'14px'}}>Shop Now</Button></NavLink><br></br>
</Grid>
                   </Grid>
               
                </Grid>
              
               <Grid item md={2} style={{marginLeft:'auto',display:'flex',flexDirection:'column',justifyContent:'center'}}>
     
 <NavLink to="#">         <img src="https://cdn.shopify.com/s/files/1/0258/7862/6349/products/t55_t500_600x.jpg?v=1625636448" height="252px"></img></NavLink>
               </Grid>
                  
           </Grid>
    </Paper>
    </>)
}
export default BeautifullLaptop;