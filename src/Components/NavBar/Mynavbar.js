import React, { Component , useState } from 'react';

import './Mynavbar.css';
import drop from '../../Images/drop.png';
import menu from '../../Images/menu.png';
function Mynavbar() {

   
        const [open , setOpen] = useState(false);
        return ( 
            <React.Fragment>
                <div className="mynavbar">
                 <img className="drop" src={drop} />
                 <div className="shadow"></div>
                <p>Graniti Haustechnik AG</p>
                <ul >
                    <li style={{display: open ? "block" : ""}}><a href="#">Home</a></li>
                    <li style={{display: open ? "block" : ""}}><a href="../AboutUs/About#about">Über Uns</a></li>
                    <li style={{display: open ? "block" : ""}}><a href="../Services/Service#services">Unsere Leistungen</a></li>
                    <li style={{display: open ? "block" : ""}}><a href="../Gallery/Gallery#gallery">Galerie</a></li>
                    <li style={{display: open ? "block" : ""}}><a href="../ContactUs/Contactus#contactus">Kontaktiere uns</a></li>
                </ul>
                <img onClick={() => setOpen(!open)} src={menu} id="bar" className="sidebar" />
                </div>
                
            </React.Fragment>

         );
    }

 
export default Mynavbar;