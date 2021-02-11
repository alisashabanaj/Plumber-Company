import React, { Component } from 'react';
import Home from './Components/Home/Home';
import './App.css';
import Mynavbar from './Components/NavBar/Mynavbar';
import Box from './Components/Boxes/Box';
import About from './Components/AboutUs/About';
import Service from './Components/Services/Service';
import Cards from './Components/Services/Cards';
import Gallery from './Gallery/Gallery';
import Contactus from './Components/ContactUs/Contactus';



class App  extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <Mynavbar/> 
              <Home/>
              <Box/>
              <About/>
              <Service/>
              <Cards/>
              <Gallery/>
              <Contactus/>
              
            </div>
         );
    }
}
 
export default App ;
