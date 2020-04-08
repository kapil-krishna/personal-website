import React from 'react';
import Javaswitch from './individual-projects/javaswitch/javaswitch';
import './allProjects.scss';


const AllProjects = () => {
    return (
        <section className="projects-section" id="projects">
            <h1>PROJECTS</h1>
                <Javaswitch />
                <h2 className="more-to-come">More to come!</h2>
        </section>
    )
}

export default AllProjects;