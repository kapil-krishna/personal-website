import React from 'react';
import LinkedInSVG from '../images/SVGs/iconmonstr-linkedin-4.svg';
import GitHubSVG from '../images/SVGs/iconmonstr-github-1.svg';
import EmailSVG from '../images/SVGs/iconmonstr-email-10.svg';

const Footer = () => {
    return (
        <footer>
            <div className="svgBox">
                <a href="https://www.linkedin.com/in/kapil-krishna-profile/" target="_blank">
                    <img src={LinkedInSVG}/>
                </a>
                <a href="https://github.com/kapil-krishna" target="_blank">
                    <img src={GitHubSVG}/>
                </a>
                <a href="mailto:kapil.krishna.yo@gmail.com" target="_blank">
                    <img src={EmailSVG}/>
                </a>
            </div>
            <h4 className="copyright">
                Copyright © 2020 Kapil Krishna.
            </h4>
        </footer>
    )
}

export default Footer;