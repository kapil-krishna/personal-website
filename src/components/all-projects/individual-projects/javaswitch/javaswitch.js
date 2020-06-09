import React from 'react';
import ReactSVG from '../../../../images/SVGs/react-2.svg';
import GatsbySVG from '../../../../images/SVGs/Gatsby-Monogram.svg';
import NetlifySVG from '../../../../images/SVGs/netlify.svg';
import TwoRowPhotoGrid from '../../../photo-grid/photoGrid';
import './javaswitch.scss';

const Javaswitch = () => {
    return (
        <div className="javaswitch-container">
            <div className="left-column">
                <h2 className="javaswitch-heading">Javaswitch</h2>
                <div className="javaswitch-description">
                    <p>As a post-programme assignment after finishing the TechSwitch bootcamp, I was given the task of designing a website for a company that offered software engineering bootcamps. 
                        The website needed to be modern, responsive and modifiable via a CMS. 
                        To achieve this I combined Gatsby.js, a static-site generator with features such as image optimisation and pulling data via GraphQL, and Netlify, allowing the site to be editable for non-developers via Netlify CMS.</p>
                </div>
                <div className="technologies">
                    <h3>Technologies used</h3>
                    <div className="svgBox">
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <img src={ReactSVG} alt="react-logo"/>
                        </a>
                        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                            <img src={GatsbySVG} alt="gatsby-logo"/>
                        </a>
                        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <img src={NetlifySVG} alt="netlify-logo"/>
                        </a>
                    </div>
                </div>
                <a className="demo-button" href="https://javaswitch.netlify.com/" target="_blank" rel="noopener noreferrer">
                    Demo 
                </a>
            </div>
            <TwoRowPhotoGrid/>
        </div>
    )
}

export default Javaswitch;