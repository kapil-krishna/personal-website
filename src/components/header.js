import React, {useState} from 'react';
import ToggleButton from './toggleButton';
import Navbar from './navbar';

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