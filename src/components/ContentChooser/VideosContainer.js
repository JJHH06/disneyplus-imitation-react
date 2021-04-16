import React from 'react';
import novedades1 from '../../assets/Videos/Novedades/novedades1.jfif';
import novedades2 from '../../assets/Videos/Novedades/novedades2.jfif';
import novedades3 from '../../assets/Videos/Novedades/novedades3.jfif';
import novedades4 from '../../assets/Videos/Novedades/novedades4.jfif';
import novedades5 from '../../assets/Videos/Novedades/novedades5.jfif';

const videos = [novedades1,novedades2,novedades3,novedades4,novedades5];

const VideosContainer = (props) => {
    const item = props;
    return (
        <div className="container-fluid videos-grid">
        <div className = "row">
            {
                    videos.map((video) => (
                        <div className="col">
                            <div className="video-image-container">
                                <img src={video} className="video-image" alt="..." />
                            </div>
                        </div>
                    ))
            }
            
            
            
        </div>
    </div>
    )
};



export default VideosContainer