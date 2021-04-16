import React, { Component } from "react";
import Slider from "react-slick";

import CategoryDivision from '../CategoryDivision/CategoryDivision'

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
      <div>
        <Slider {...settings}>
          <div>
            <CategoryDivision/>
          </div>
          <div>
          <CategoryDivision/>
          </div>
          <div>
          <CategoryDivision/>
          </div>
          <div>
          <CategoryDivision/>
          </div>
          <div>
            <CategoryDivision/>
          </div>
          <div>
          <CategoryDivision/>
          </div>
        </Slider>
      </div>
    );
  }
}