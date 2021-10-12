
import './App.css';
import NavBar from './Components/CommonComponents/NavBar'
import Footer from './Components/CommonComponents/Footer';
import HomePage from './Components/HomePageComponents/HomePageIntegration';
import Register from './Components/RegistrationComponents/registeration';
import ContactUs from './Components/ContactUsComponents/ContactUsIntegration'
import FAQ from './Components/FAQComponents/FAQIntegration'
import {  Route,Switch } from "react-router-dom";
function App() {
  return (<>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/faq" component={FAQ}></Route>

      </Switch>
    
      <Footer />
   
    </>
  );
}

export default App;
