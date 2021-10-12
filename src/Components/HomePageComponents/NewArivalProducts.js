import  React,{useEffect,useState}from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import DetailsIcon from '@mui/icons-material/Details';
import '../../App.css';
const NewArivalProducts=()=>
{
   const [products,setProducts]=useState([])
   const getProducts=async()=>
   {
       const response=await axios.get('http://127.0.0.1:8000/api/products/')
      //  const response=await axios.get('https://pakelectronicsapi.herokuapp.com/productapi/')
       setProducts(response.data)
   }
   useEffect(()=>
   {
        getProducts();
   },[])

    return (<>
   
   <Paper  elevation={1} style={{marginTop:'0.5%',paddingLeft:'1.2%',paddingRight:'1.2%',paddingBottom:'1.2%',paddingTop:'0.6%'}}>
   <Box>
     <Typography><h3 style={{fontFamily:'initial'}}>New Products</h3></Typography>
   </Box>
   <hr style={{color:'gray',marginBottom:'1.3%'}}></hr>
   <Grid container direction="row" spacing={2}   >
 
    {
      products.map((item,index) =>
      (
        <Grid item md={2} sm={6}>
          <div className="card card1" style={{borderRadius:'3px',padding:'15px'}}>
            <img src={item.product_image}  className="card-img-top card-img ImgTransform" alt="..."></img>
         
            <div className="card-body" style={{textAlign:'center',fontSize:'18px'}}>
              <span >Card title</span><br></br>
              <span>Price:{item.product_price}$</span><br></br>
              {/* <NavLink to={`/${item.id}/`} style={{textDecoration:'none'}}>     <Button startIcon={<DetailsIcon />} className="SignInClass" variant="outlined" style={{background:'#dce0e3',paddingLeft:'15%',marginTop:'5px',paddingRight:'15%',textTransform:'capitalize',fontSize:'14px'}}>Detail</Button></NavLink> */}
            </div>
          </div>
        </Grid>
      ))
    }
   
   </Grid>
   </Paper>
    </>)
}
export default NewArivalProducts