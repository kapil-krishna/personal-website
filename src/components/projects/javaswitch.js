import React from 'react';
import Gallery from 'react-photo-gallery';
import appForm from '../../images/javaswitch/app-form.PNG';
import mainPage from '../../images/javaswitch/main-page.PNG';
import mobileView from '../../images/javaswitch/mobile-view.PNG';
import modal from '../../images/javaswitch/modal.PNG';

const Javaswitch = () => {

    const images = [
        {
            src: appForm,
        },
        {
            src: mainPage
        },
        {
            src: mobileView
        },
        {
            src: modal
        }
    ];
    
    return (
        <div className="javaswitch-container">
            <div className="left-column">
                <div className="javaswitch-description">
                    <p>After completing the TechSwitch bootcamp, I was given the task of designing a website for a company that offered software engineering bootcamps. The main point of the assignment was to get used to using Gatsby.js and creating static web pages.</p>
                </div>
                <div className="javaswitch-technologies">
                    <p>Gatsby.js, React.js, Netlify</p>
                </div>
            </div>
            <div className="right-column">
                <div className="javaswitch-images">
                    <Gallery photos={images}/>
                </div>
            </div>
        </div>
    )
}

export default Javaswitch;