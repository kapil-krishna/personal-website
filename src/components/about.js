import React from 'react';
import profilePhoto from "../images/about-photo.jpg";

const About = () => {
    return (
        <section className="about-section" id="about">
            <h1>ABOUT</h1>
            <div className="about-container">
                <img src={profilePhoto}/>
                <div className="about-content">
                    <h2>"There's a difference between knowing the path and walking the path"</h2>
                    <p>Hey there! I'm Kapil, an aspiring software developer from New Zealand, currently based in London. As a tech enthusiast who's always been curious about software engineering, recently I decided to take the leap and try to forge out a career doing something I love. So this is my first attempt at a personal website. Take a look around and let me know what you think!</p>
                    <p>When I'm not involved in tech, you can usually find me playing the guitar or annoying my girlfriend. Two of life's greatest pleasures.</p>
                </div>
            </div>
        </section>
    )
}

export default About;