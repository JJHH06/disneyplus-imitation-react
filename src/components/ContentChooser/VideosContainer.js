import React from 'react';
import novedades1 from '../../assets/Videos/Novedades/novedades1.jfif';
import novedades2 from '../../assets/Videos/Novedades/novedades2.jfif';
import novedades3 from '../../assets/Videos/Novedades/novedades3.jfif';
import novedades4 from '../../assets/Videos/Novedades/novedades4.jfif';
import novedades5 from '../../assets/Videos/Novedades/novedades5.jfif';

const VideosContainer = () => {
    return (
        <div className="container-fluid videos-grid">
        <div className = "row">
            <div className = "col">
                <div className="gif-branch-container shadowed">
                    <img src={novedades1} className="highlight-logo" alt="..." />
                </div>
            </div>
            <div className = "col">
                <div className="gif-branch-container shadowed">
                    <img src={novedades2} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-branch-container shadowed">
                    <img src={novedades3} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-branch-container shadowed">
                    <img src={novedades4} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-branch-container shadowed">
                    <img src={novedades5} className="highlight-logo" alt="..." />
                </div>
            
            </div>
        </div>
    </div>
    )
};



export default ContentChooser