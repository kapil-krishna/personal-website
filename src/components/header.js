import React, {useState} from 'react';
import ToggleButton from './toggleButton';
import Navbar from './navbar';

const Header = () => {

    const[toggle, setToggle] = useState(false);

    return (
        <header className="header">
              <ToggleButton toggle={toggle} setToggle={setToggle} />
              <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    )
}

export default Header;