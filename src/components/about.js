import React from 'react';
import profilePhoto from "../images/about-photo.jpg";

const About = () => {
    return (
        <section className="about-section" id="about">
            <h1>ABOUT</h1>
            <div className="about-container">
                <img src={profilePhoto}/>
                <div className="about-content">
                    <h2>Hello.</h2>
                    <p>I'm Kapil, an aspiring software developer from New Zealand, currently based in London. Having only recently discovered the exciting world of software engineering, I've decided to take the leap and try and forge out a career doing something I love!</p>
                    <p>When I'm not involved in tech, you can usually find me playing the guitar or annoying my girlfriend. Two of life's greatest pleasures.</p>
                </div>
            </div>
        </section>
    )
}

export default About;