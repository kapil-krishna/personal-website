import React, {useState} from 'react';
import ToggleButton from './toggle-button/toggleButton';
import Navbar from './navbar/navbar';
import './header.scss';

const Header = () => {

    const[toggle, setToggle] = useState(false);

    window.addEventListener('scroll', () => {
        var element = document.getElementById("header");
        if (toggle===true) {
            element.classList.add("open");
        } else {
            element.classList.remove("open");
        }
    })

    return (
        <header className="header" id="header">
              <ToggleButton toggle={toggle} setToggle={setToggle} />
              <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    )
}

export default Header;