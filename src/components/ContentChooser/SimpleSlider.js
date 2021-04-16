import React, { Component } from "react";
import Slider from "react-slick";
import VideosContainer from './VideosContainer';
import novedades1 from '../../assets/Videos/Novedades/novedades1.jfif';
import novedades2 from '../../assets/Videos/Novedades/novedades2.jfif';
import novedades3 from '../../assets/Videos/Novedades/novedades3.jfif';
import novedades4 from '../../assets/Videos/Novedades/novedades4.jfif';
import novedades5 from '../../assets/Videos/Novedades/novedades5.jfif';

const videosxd = [novedades1,novedades2,novedades3,novedades4,novedades5];

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
            <VideosContainer videos = {videosxd}/>
          </div>
          <div>
          <VideosContainer videos = {videosxd}/>
          </div>
        </Slider>
      </div>
    );
  }
}