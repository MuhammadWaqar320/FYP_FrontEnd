import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import mobile from '../../Components/Images/mobile.png'
import laptop from '../../Components/Images/laptop.png'
import lcd from '../../Components/Images/lcd.png'
import Chip from '@material-ui/core/Chip';
import '../../App.css';
import { Avatar, Hidden, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const SearchBar=()=>
{
    return (<>
       <Paper elevation={10} style={{paddingTop:'15px',paddingBottom:'15px',borderRadius:'0px'}}>
    <Grid container 
  direction="row"
  justifyContent="center"
  alignItems="center"
  align = "center" justify = "center"
  >
    <Hidden mdDown="true">
    <Grid item md={2} lg={3} sm={1} xs={1}>
           <Grid container  direction="row">
            <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://www.freeiconspng.com/thumbs/computer-png-hd/computer-case-monitor-mouse-keyboard-png-1.png"></Avatar>} label="Computers"></Chip></Grid>
             <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={laptop}></Avatar>} label="Laptops"></Chip></Grid>
             <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={lcd}></Avatar>} label="LCDs"></Chip></Grid>
           </Grid>
      </Grid>
    </Hidden>
    
      <Grid item md={8} lg={6} sm={10} xs={10}>
     
       <div class="input-group" >
      <div class="input-group-append">
      <NavLink class="btn btn-secondary" to="#" type="button" style={{border:'2px solid #ffca44',backgroundColor:'#ffca44',borderTopLeftRadius:'60px',borderBottomLeftRadius:'60px'}}>
      <i class="fa fa-microphone" aria-hidden="true" style={{color:'#081333'}}></i>
      </NavLink>
    </div>
    <input type="text" class="form-control ShadowClass" placeholder="Search any product here ..." style={{border:'2px solid #ffca44'}}></input>
    <div class="input-group-append">
      <NavLink class="btn btn-secondary" to="#" type="button" style={{border:'2px solid #ffca44',backgroundColor:'#ffca44',borderTopRightRadius:'60px',borderBottomRightRadius:'60px'}}>
        <i class="fa fa-search" style={{color:'#081333'}}></i>
      </NavLink>
    </div>
  </div>
  
        </Grid>
        <Hidden mdDown="true">
        <Grid item md={2} lg={3} sm={1} xs={1}>

<Grid container  direction="row"justifyContent="center"alignItems="center">
   <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://freepngimg.com/thumb/categories/667.png"></Avatar>} label="Cameras"></Chip></Grid>
  
   <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={mobile}></Avatar>} label="Mobiles"></Chip></Grid>
   <Grid item md={4} >   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #ffca44',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://freepngimg.com/thumb/categories/673.png"></Avatar>} label="Accessories"></Chip></Grid>
</Grid>
</Grid>
        </Hidden>
      
    </Grid>
    </Paper>  
    </>)
}
export default SearchBar