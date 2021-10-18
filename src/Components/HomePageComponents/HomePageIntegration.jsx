import React  from "react";
import BottomNavBar from './BottomNavBar';
import SearchBar from './SearchBar';
import SliderComponent from './SliderComponent';
import AccessoriesComponent from "./AccessoriesComponent";
import SignInOption from "./SignInOption";
import WhyBuy from "./WhyBuy";
import NewArivalProducts from "./NewArivalProducts";
import BeautifullLaptop from "./BeautifullLaptop";

import MapComponent from "./MapComponent";
import MultiSlider from "./MultiSlider";

const HomePageIntegration=()=>
{
    return (<>
    <SearchBar />
    <BottomNavBar />
    <SliderComponent />
    <AccessoriesComponent />
    <div style={{paddingTop:'1.5%',paddingBottom:'1.5%',paddingLeft:'2%',paddingRight:'2%'}}>
        <WhyBuy />
        <MultiSlider />  
    
        {/* <NewArivalProducts />  */}
        <BeautifullLaptop />
        
    
    
    
    </div>
    <SignInOption />
  <MapComponent></MapComponent>
    </>)
}



export default HomePageIntegration