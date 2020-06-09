import React from 'react';
import LinkedInSVG from '../../images/SVGs/iconmonstr-linkedin-4.svg';
import GitHubSVG from '../../images/SVGs/iconmonstr-github-1.svg';
import EmailSVG from '../../images/SVGs/iconmonstr-email-10.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="svgBox">
                <a href="https://www.linkedin.com/in/kapil-krishna-profile/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInSVG} alt="linkedin-logo"/>
                </a>
                <a href="https://github.com/kapil-krishna" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubSVG} alt="github-logo"/>
                </a>
                <a href="mailto:kapil.krishna.yo@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={EmailSVG} alt="email-logo"/>
                </a>
            </div>
            <h4 className="copyright">
                Copyright © 2020 Kapil Krishna. All rights reserved.
            </h4>
        </footer>
    )
}

export default Footer;