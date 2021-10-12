import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
const AccessoriesComponent=()=>
{
    return (<>
    <Hidden smDown="true">
       <Paper elevation={10}>
       <Grid container   justify="center" align="center" style={{color:'#081333',overflowX:'auto'}}>
        <Grid item md={2} className="AccessoriesClass">
           <div style={{margin:'5%'}}>
           <i class="fa fa-desktop" aria-hidden="true"></i>  <p>Computer Accessories</p>
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <i class="fas fa-laptop-code"></i>  <p>Laptop Accessories</p>
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <i class="fas fa-mobile-alt"></i>  <p>Mobile Accessories</p>
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <i class="fas fa-tv"></i>  <p>LCD Accessories</p>
           </div>
        </Grid>
        <Grid item md={2} className="AccessoriesClass">
        <div style={{margin:'5%'}}>
        <i class="fa fa-camera-retro" aria-hidden="true"></i>  <p>Camera Accessories</p>
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <i class="fa fa-list-alt" aria-hidden="true"></i>  <p>All Accessories</p>
           </div>
        </Grid>
    </Grid>
       </Paper>
  
    </Hidden>
   
    
    </>)
}
export default AccessoriesComponent