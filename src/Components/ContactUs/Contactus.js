import React, { Component } from 'react';
import './Contactus.css';
import location from '../../Images/location.png';
import phone from '../../Images/phone.png';
import email from '../../Images/email.png';
import instagram from '../../Images/instagram.png';
import facebook from '../../Images/facebook.png';
import clock from '../../Images/clock.png';
class Contactus extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="contact">

                <div className="margin"></div>
                <section className="parallax">
                    <div className="parallax-inner">
                      
                    </div>
                </section>
                <div className="margin"></div>
                <div className="content2" id="contactus">
                    <h2>Danke für Ihre Aufmerksamkeit</h2>
                    <h2>Danke für Ihre Aufmerksamkeit</h2>
                    <div className="contactInfo">
                        <ul>
                           <li><img src={phone}/>
                           <p className="information">+41 76 421 21 81</p>
                           </li>
                            <li><img src={location}/>
                           <p  className="information">Hechtweg 1 , 4052 Basel</p>
                           </li>
                        <li><img src={email}/>
                           <p  className="information"><a href="mailto:granitihaustechnik.ag@gmail.com" target="_blank" > granitihaustechnik.ag@gmail.com </a> </p>
                           </li>
                        </ul>
                        <ul className="secondlist">
                           <li><img src={instagram}/>
                           <p  className="information"><a href="https://www.instagram.com/graniti_sanitar/" target="_blank">graniti_sanitar </a></p>
                           </li>
                            <li><img src={facebook}/>
                           <p  className="information"><a href="https://www.facebook.com/profile.php?id=100010193701837" target="_blank">Graniti Sanitär</a></p>
                           </li>
                       
                        </ul>
                        <ul className="thirdlist">
                            
                            <li> <img src={clock} />
                            <p  className="information"> Monday-Friday <br/> 8AM - 5PM</p> </li>
                            
                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.827909184721!2d7.616603815870222!3d47.551677999763065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9d4b3adf665%3A0x2b6f04b9891e7f49!2sGraniti%20Sanit%C3%A4r!5e0!3m2!1sen!2s!4v1611411365433!5m2!1sen!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contactus;