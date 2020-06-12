import React from 'react';
import './home.scss';

const Home = () => {
    return (
        <section className="home-section" id="home">
            <h1 className="first-line">
                <span className="hey-there">Hey there! </span>
                <span className="im-kapil">I'm Kapil</span></h1>
            <img src="https://drive.google.com/uc?id=1EAhskodqwfQkPHi0wIBnEFZlBZtqd8bn" alt="main-banner"/>
            <h2 className="second-line">Welcome to my website</h2>
        </section>
    )
}

export default Home;