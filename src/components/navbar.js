import React from 'react';

const Navbar = ({ toggle }) => {

    let navClass = "navbar";

    if (toggle===true) {
        navClass = "navbar-open"
    }

    return (
            <nav class={navClass}>
                <a className="nav-item" href="#">Home</a>
                <a className="nav-item" href="#about">About</a>
                <a className="nav-item" href="#projects">Projects</a>
                <a className="nav-item" href="#contact">Contact</a>
            </nav>
    )
}

export default Navbar;