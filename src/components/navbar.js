import React from 'react';

const Navbar = ({ toggle, setToggle }) => {

    let navClass = "navbar";

    if (toggle===true) {
        navClass = "navbar-open"
    }

    return (
            <nav class={navClass}>
                <a className="nav-item" href="#" onClick={() => setToggle(!toggle)}>Home</a>
                <a className="nav-item" href="#about" onClick={() => setToggle(!toggle)}> About</a>
                <a className="nav-item" href="#projects" onClick={() => setToggle(!toggle)}>Projects</a>
                <a className="nav-item" href="#contact" onClick={() => setToggle(!toggle)}>Contact</a>
            </nav>
    )
}

export default Navbar;