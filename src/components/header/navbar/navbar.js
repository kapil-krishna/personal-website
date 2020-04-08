import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.scss";

const Navbar = ({ toggle, setToggle }) => {

    let navClass = "navbar";

    if (toggle===true) {
        navClass = "navbar-open"
    }

    return (
            <nav class={navClass} id="nav">
                <Link
                    className="nav-item"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onClick={() => setToggle(!toggle)}
                    >HOME</Link>
                <Link 
                    className="nav-item"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setToggle(!toggle)}
                    >ABOUT</Link>
                <Link 
                    className="nav-item"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setToggle(!toggle)}
                    >PROJECTS</Link>
                <Link 
                    className="nav-item"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setToggle(!toggle)}
                    >CONTACT</Link>
            </nav>
    )
}

export default Navbar;