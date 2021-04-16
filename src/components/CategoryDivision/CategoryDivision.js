import React from 'react';
import logo1 from '../../assets/Categories/disney-logo.png';
import logo2 from '../../assets/Categories/pixar-logo.png';
import logo3 from '../../assets/Categories/marvel-logo.png';
import logo4 from '../../assets/Categories/starwars-logo.png';
import logo5 from '../../assets/Categories/natgeo-logo.png';

const CategoryDivision = () => {
    
    return (
    <div className="container-fluid branches-container">
        <div className = "row">
            <div className = "col">
                <div className="gif-disney gif-branch-container shadowed">
                    <img src={logo1} className="highlight-logo" alt="..." />
                </div>
            </div>
            <div className = "col">
                <div className="gif-pixar gif-branch-container shadowed">
                    <img src={logo2} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-marvel gif-branch-container shadowed">
                    <img src={logo3} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-starwars gif-branch-container shadowed">
                    <img src={logo4} className="highlight-logo" alt="..." />
                </div>
            
            </div>
            <div className = "col">
                <div className="gif-natgeo gif-branch-container shadowed">
                    <img src={logo5} className="highlight-logo" alt="..." />
                </div>
            
            </div>
        </div>
    </div>
    );
};


export default CategoryDivision;
