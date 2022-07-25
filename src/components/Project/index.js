import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'Glassfiller',
            description: 'This is an application that houses cocktail recipes. Make, save, and find new concoctions. Deployed with Heroku andade with Node.js, SQL, Express.js, and Handlebars.js.',
            link: 'https://glassfiller.herokuapp.com/',
            photo: './images/glassfiller.png'
        },
        {
            name: 'Glassfiller 2.0',
            description: 'This is an application that houses cocktail recipes. Make, save, and find new concoctions. Made with Node.js, Mongodb, React, and ',
            link: '',
            photo: './images/drink-app.jpeg'
        },
        {
            name: 'Gifcast',
            description: 'An application that presents the current weather of a certain location and also a gif from giphy using the description of the weather.',
            link: 'https://cardenas1850.github.io/project-1/',
            photo: './images/gifcast.png'
        },
        {
            name: 'Work Day Scheduler',
            description: 'An application that can be used to plan out your day. Save your tasks locally using local storage. Each time slot is color coardianted based on the current time.',
            link: 'https://caleeeb.github.io/work-day-scheduler/',
            photo: './images/work-day-scheduler.png'
        },
        {
            name: 'Note Taker',
            description: 'An application that stores notes for you. App is made with Node.js and Express.js, deployed with Heroku.',
            link: 'https://notetaker1234567.herokuapp.com/',
            photo: './images/note-taker.png'
        },
        {
            name: 'Run Buddy',
            description: "A mock up of a fitness program's website.",
            link: 'https://caleeeb.github.io/run-buddy/',
            photo: './images/run-buddy.png'
        },
    ]);

    return (

        <div className='container'>
            {projects.map((project) => (
                <a className='project' href={project.link} target="_blank">

                    <div className="mx-1">
                        <div className='capition'>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <img
                                src={project.photo}
                                alt={project.name}
                                className="mx-1"
                                // onClick={window.open(project.link)}
                                key={project.name}
                            />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Project;