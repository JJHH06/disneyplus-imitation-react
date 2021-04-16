import React, { Component } from "react";
import Slider from "react-slick";
import VideosContainer from './VideosContainer';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "">
        <Slider {...settings}>
          <div>
            <VideosContainer/>
          </div>
          <div>
          <VideosContainer/>
          </div>
          <div>
          <VideosContainer/>
          </div>
          <div>
          <VideosContainer/>
          </div>
          <div>
          <VideosContainer/>
          </div>
          <div>
          <VideosContainer/>
          </div>
        </Slider>
      </div>
    );
  }
}