import React from 'react';
import { bool, func } from 'prop-types';


const ToggleButton = ({ toggle, setToggle }) => {

    let toggleButton = "toggle-button";
    let toggleButtonLine="toggle-button-line";
    let toggleLineTop = `${toggleButtonLine}`;
    let toggleLineMiddle = `${toggleButtonLine}`;
    let toggleLineBottom = `${toggleButtonLine}`;

    if (toggle===true) {
        toggleButton = "toggle-button-open";
        toggleLineTop = `${toggleLineTop}-top`;
        toggleLineMiddle = `${toggleLineMiddle}-middle`;
        toggleLineBottom = `${toggleLineBottom}-bottom`;
    }

    return (
        <button className={toggleButton} toggle={toggle} onClick={() => setToggle(!toggle)}>
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