import React from 'react';
import ReactSVG from '../../images/SVGs/react-2.svg';
import GatsbySVG from '../../images/SVGs/Gatsby-Monogram.svg';
import NetlifySVG from '../../images/SVGs/netlify.svg';
import TwoRowPhotoGrid from '../photoGrid';

const Javaswitch = () => {
    return (
        <div className="javaswitch-container">
            <div className="left-column">
                <h2 className="javaswitch-heading">Javaswitch</h2>
                <div className="javaswitch-description">
                    <p>As a post-programme assignment after finishing the TechSwitch bootcamp, I was given the task of designing a website for a company that offered software engineering bootcamps. 
                        The website needed to be modern, responsive and modifiable via a CMS. 
                        To achieve this I combined Gatsby.js, a static-site generator, with Netlify CMS, allowing the site to be editable for non-developers as well as having other features such as image optimisation.</p>
                </div>
                <div className="technologies">
                    <h3>Technologies used</h3>
                    <div className="svgBox">
                        <a href="https://reactjs.org/" target="_blank">
                            <img src={ReactSVG}/>
                        </a>
                        <a href="https://www.gatsbyjs.org/" target="_blank">
                            <img src={GatsbySVG}/>
                        </a>
                        <a href="https://www.netlify.com/" target="_blank">
                            <img src={NetlifySVG}/>
                        </a>
                    </div>
                </div>
            </div>
            <a className="photoGrid" href="https://javaswitch.netlify.com/" target="_blank">
                <TwoRowPhotoGrid/>
            </a>
            
        </div>
    )
}

export default Javaswitch;