import React, { Component } from 'react';
import "./Box.css";
import Icon1 from "../../Images/icon1.png";
import Icon2 from "../../Images/icon2.png";
import Icon3 from "../../Images/icon3.png";
class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="box">
                 <ul>
                     <li>

                <div className="box2">
                    <img src={Icon1}/>
                 <h1>Allgemeine Sanitärwartung</h1>
                
                </div>
                     </li>
                     <li>

                <div className="box2">
                <img src={Icon2}/>
                 <h1>24/7 Sanitär-Notdienst</h1>
                </div>
                     </li>
                     <li>

               <div className="box2">
               <img src={Icon3}/>
              <h1>Sanitärzubehör und Ausrüstung</h1>
             </div>
               </li>
                 </ul>
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Box;