import React from 'react';
import Slider from 'react-slick';
import VideosContainer from './VideosContainer';
import novedades1 from '../../assets/Videos/Novedades/novedades1.jfif';
import novedades2 from '../../assets/Videos/Novedades/novedades2.jfif';
import novedades3 from '../../assets/Videos/Novedades/novedades3.jfif';
import novedades4 from '../../assets/Videos/Novedades/novedades4.jfif';
import novedades5 from '../../assets/Videos/Novedades/novedades5.jfif';
import novedades6 from '../../assets/Videos/Novedades/novedades6.jfif';
import novedades7 from '../../assets/Videos/Novedades/novedades7.jfif';
import novedades8 from '../../assets/Videos/Novedades/novedades8.jfif';
import novedades9 from '../../assets/Videos/Novedades/novedades9.jfif';
import novedades10 from '../../assets/Videos/Novedades/novedades10.jfif';
import novedades11 from '../../assets/Videos/Novedades/novedades11.jfif';
import novedades12 from '../../assets/Videos/Novedades/novedades12.jfif';

import oscar1 from '../../assets/Videos/Oscar/oscar1.jfif';
import oscar2 from '../../assets/Videos/Oscar/oscar2.jfif';
import oscar3 from '../../assets/Videos/Oscar/oscar3.jfif';
import oscar4 from '../../assets/Videos/Oscar/oscar4.jfif';
import oscar5 from '../../assets/Videos/Oscar/oscar5.jfif';
import oscar6 from '../../assets/Videos/Oscar/oscar6.jfif';
import oscar7 from '../../assets/Videos/Oscar/oscar7.jfif';
import oscar8 from '../../assets/Videos/Oscar/oscar8.jfif';
import oscar9 from '../../assets/Videos/Oscar/oscar9.jfif';
import oscar10 from '../../assets/Videos/Oscar/oscar10.jfif';
import oscar11 from '../../assets/Videos/Oscar/oscar11.jfif';
import oscar12 from '../../assets/Videos/Oscar/oscar12.jfif';

import mcu1 from '../../assets/Videos/MCU/mcu1.jfif';
import mcu2 from '../../assets/Videos/MCU/mcu2.jfif';
import mcu3 from '../../assets/Videos/MCU/mcu3.jfif';
import mcu4 from '../../assets/Videos/MCU/mcu4.jfif';
import mcu5 from '../../assets/Videos/MCU/mcu5.jfif';
import mcu6 from '../../assets/Videos/MCU/mcu6.jfif';
import mcu7 from '../../assets/Videos/MCU/mcu7.jfif';
import mcu8 from '../../assets/Videos/MCU/mcu8.jfif';
import mcu9 from '../../assets/Videos/MCU/mcu9.jfif';
import mcu10 from '../../assets/Videos/MCU/mcu10.jfif';
import mcu11 from '../../assets/Videos/MCU/mcu11.jfif';
import mcu12 from '../../assets/Videos/MCU/mcu12.jfif';

const categoriasVideos = [
  {
    nombre: 'Novedades en Disney+',
    videos: [
      [novedades1, novedades2, novedades3, novedades4],
      [novedades5, novedades6, novedades7, novedades8],
      [novedades9, novedades10, novedades11, novedades12],
    ],
  },
  {
    nombre: 'Ganadoras de un Óscar',
    videos: [
      [oscar1, oscar2, oscar3, oscar4],
      [oscar5, oscar6, oscar7, oscar8],
      [oscar9, oscar10, oscar11, oscar12]],
  },
  {
    nombre: 'Universo Cinematográfico de Marvel',
    videos: [
      [mcu1, mcu2, mcu3, mcu4],
      [mcu5, mcu6, mcu7, mcu8],
      [mcu9, mcu10, mcu11, mcu12]],
  },

];

export default function SimpleSlider() {
  return (
    <div>
      {
                categoriasVideos.map((categoria) => (
                  <div>
                    <div className="contenedor-videos">
                      <p className="contenedor-videos-font">{categoria.nombre}</p>
                      <Slider dots={false} infinite={false} slidesToShow={1} slidesToScroll={1}>
                        {
                                    categoria.videos.map((lineas) => (
                                      <div>
                                        <VideosContainer videos={lineas} />
                                      </div>
                                    ))
                                }

                      </Slider>
                    </div>
                  </div>
                ))
            }

    </div>

  );
}
