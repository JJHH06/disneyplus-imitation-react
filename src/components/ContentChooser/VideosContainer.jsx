import React from 'react';

const VideosContainer = (props) => {
  const item = props;
  return (
    <div className="container-fluid videos-grid">
      <div className="row">
        {
                    item.videos.map((video) => (
                      <div className="col">
                        <div className="video-image-container shadowed2">
                          <img src={video} className="video-image" alt="..." />
                        </div>
                      </div>
                    ))
            }

      </div>
    </div>
  );
};

export default VideosContainer;
