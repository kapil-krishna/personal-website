import React from 'react';
import { bool, func } from 'prop-types';
import "./toggleButton.scss";


const ToggleButton = ({ toggle, setToggle }) => {

    let toggleButtonLine="toggle-button-line";
    let toggleLineTop = `${toggleButtonLine}`;
    let toggleLineMiddle = `${toggleButtonLine}`;
    let toggleLineBottom = `${toggleButtonLine}`;

    if (toggle===true) {
        toggleLineTop = `${toggleLineTop}-top`;
        toggleLineMiddle = `${toggleLineMiddle}-middle`;
        toggleLineBottom = `${toggleLineBottom}-bottom`;
    }

    return (
        <button className="toggle-button" aria-label="toggle-nav" toggle={toggle} onClick={() => setToggle(!toggle)}>
            <div className={toggleLineTop} />
            <div className={toggleLineMiddle} />
            <div className={toggleLineBottom} />
        </button>
    )
};

ToggleButton.propTypes = {
    toggle: bool.isRequired,
    setToggle: func.isRequired
}

export default ToggleButton;