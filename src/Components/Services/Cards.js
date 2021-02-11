import React, { Component } from 'react';
import service1 from "../../Images/service1.jpg";
import service2 from "../../Images/service2.jpg";
import service4 from "../../Images/service4.jpg";
import general from "../../Images/general.png";
import toilet from "../../Images/toilet.png";
import heater from "../../Images/water-heater.png";
import "./Cards.css";
class Cards extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div className="boxes">
                 <ul>
                     <li>

                <div className="box1">
                    <img src={general} className="icons"/>
                    <div className="circle"></div>
                    <img src={service1}/>
                 <h4>Allgemeine Sanitär </h4>
                 <div className="line"></div>
                
                 <h5>Wir können Wasserhähne reparieren und installieren,
                     Installieren Sie Rohre und andere Installationsarbeiten
                 </h5>
                </div>
                     </li>
                     <li>

                <div className="box1">
                <img src={toilet} className="icons"/>
                <div className="circle"></div>
                <img src={service2}/>
                 <h4>Installation und Reparatur von Toiletten</h4>
                 <div className="line"></div>
                 <h5>Wir können eine breite Palette von Toilettenmodellen reparieren oder installieren.
                     Selbst das allmächtige Zeigen hat keine Kontrolle.
                 </h5>
                </div>
                     </li>
                     <li>

               <div className="box1">
               <img src={heater} className="icons"/>
               <div className="circle"></div>
               <img src={service4}/>
              <h4>Warmwasserbereitung und -kühlung</h4>
              <div className="line"></div>
              <h5>Wir können sowohl private als auch gewerbliche Heizsysteme reparieren oder installieren.
                  Sogar die Allmächtigen.
              </h5>
             </div>
               </li>
                 </ul>
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cards;