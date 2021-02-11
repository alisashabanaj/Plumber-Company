import React, { Component } from 'react';
import "./About.css";
import aboutus from "../../Images/aboutus.png";
import check1 from "../../Images/check1.png";
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="About" >
                    <img src={aboutus} />
                    <div className="aboutText" id="about">
                        <div className="line"></div>
                        <p id="title" >Über uns</p>
                        <h1>Sanitär ist das, was wir tun</h1>
                        <p id="text1">
                        
Wir sind ein preisgekröntes Sanitärunternehmen mit über 8 Jahren Erfahrung in der Branche. Wir bieten eine breite Palette von Dienstleistungen für Privat- und Geschäftskunden.
                        <ul>
                            <li><img src={check1}/>
                                <p>Qualifiziertes Team</p>
                            </li>
                            <li><img src={check1}/>
                                <p>Erschwingliche Preise</p>
                            </li>
                            <li><img src={check1}/>
                                <p>Schneller Service</p>
                            </li>
                        </ul>
                        <ul id="second">
                            <li><img src={check1}/>
                                <p>8+ Jahre Erfahrung</p>
                            </li>
                            <li><img src={check1}/>
                                <p>100+ Projekte</p>
                            </li>
                            <li><img src={check1}/>
                                <p>Sanitär-Experten</p>
                            </li>
                        </ul>
                 <p id="text2">Kein Job ist zu groß oder zu klein. Wir haben alles für Sie.
                     Zusätzlich zu unseren Dienstleistungen können Sie in unserem Shop nachsehen
                     breite Palette von Sanitärzubehör und Ausrüstung.
                      Wenn es um Klempnerarbeiten geht, sind wir Ihr One-Stop-Shop.</p>
                        </p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default About;