import React from 'react';
import './photoGrid.scss';

const TwoRowPhotoGrid = () => (
    <div className="two-row-grid">
        <div className="images-top-row" />
        <div className="images-bottom-row">
            <div className="images-left-column">
                <div className="top-image"/>
                <div className="bottom-image"/>
            </div>
            <div className="images-right-column"/>
        </div>
    </div>
)

export default TwoRowPhotoGrid;

