import React, { Component } from 'react';
import './Gallery.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../SliderImages/slider1.jpg";
import slider2 from "../SliderImages/slider2.jpg";
import slider3 from "../SliderImages/slider3.jpeg";
import slider4 from "../SliderImages/slider4.png";
import slider5 from "../SliderImages/slider5.jpg";
import slider6 from "../SliderImages/slider6.jpg";
import slider7 from "../SliderImages/slider7.jpg";
import slider8 from "../SliderImages/slider8.jpg";
import slider9 from "../SliderImages/slider9.jpg";
import slider10 from "../SliderImages/slider10.jpg";
import slider11 from "../SliderImages/slider11.jpg";
import slider12 from "../SliderImages/slider12.jpg";
import slider13 from "../SliderImages/slider13.jpg";
import './Slider.scss';




let settings={
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    cssEase:"linear"
}
class Gallery extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="gallery" id="gallery">
                 <div className="line"></div>
                <h1>Galerie</h1>
                <p>
"Die einzige Möglichkeit, großartige Arbeit zu leisten, besteht darin, zu lieben, was Sie tun ." <br/><br/> <span id="quote">Steve Jobs</span></p>
              <Slider {...settings} className="slider2">
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider1} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider2} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider4} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider3} />
                          </div>
                          <div className="details">
                              <h2>Heizung arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider5} />
                          </div>
                          <div className="details">
                              <h2>Heizung arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider6} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider7} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider8} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider9} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider10} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider11} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider12} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
                  <div className="card-wrapper">
                      <div className="card">
                          <div className="card-image">
                              <img src={slider13} />
                          </div>
                          <div className="details">
                              <h2>Badezimmer arbeit</h2>
                          </div>
                      </div>
                  </div>
              </Slider>
              
                </div>
            </React.Fragment>
          );
    }
}
 
export default Gallery;