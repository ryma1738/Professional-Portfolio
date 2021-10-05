import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import carbon_watchers from './assets/carbon_watchers.JPG';
import techBlog from './assets/techBlog.JPG';
import robot from './assets/robotGladiators.JPG';
import stickleBricks from './assets/sticklebricks.JPG'
//import ryma from './assets/ryma1738.JPG';
import carbon_watchers2 from './assets/carbon_watchers2.JPG';
import budget_tracker from './assets/budget_tracker.JPG';

function Portfolio() {

    const websites = [
         { 
             id: 0, title: 'Carbon Watchers 2.0', tech: 'express.js, react, react bootstrap, axios, node.js, concurrently', 
            description: 'This site was created as a way to help spread awareness about climate change. This is a personal project created by me, as a way to put climate change into perspective in ways that most people never see. This site was created at the end of my collage boot camp course and is a website I intend to publish on AWS.',
            src: carbon_watchers2, git: 'https://github.com/ryma1738/Carbon_Watchers-2.0', deployed: 'https://carbonwatchers2.herokuapp.com/'
        },
        {
            id: 1, title: 'StickleBricks', tech: 'REST express.js api backend, react, mongoose/mongodb, axios, and more',
            description: 'This is a full stack e-commerce site, created as my final group project for my coding boot camp. I was in charge of the backend / linking the backend and frontend of this site. This site shows off my ability to create a quality e-commerce backend api / site. We were only given 2 weeks to complete this project as a result some features in the backend are not present in the frontend.',
            src: stickleBricks, git: 'https://github.com/ryma1738/robot-gladiators', deployed: 'https://sticklebricks.herokuapp.com/'
        },
        { 
            id: 2, title: 'Tech Blog', tech: 'mySql Express.js, Handlebars.js', 
            description: 'This project is designed to show my ability to use sql, sequelize, express, and handlebars.js all together. This website allows the user to log in and create, comment and edit / delete posts. As well anyone can view the posts but they can not do much more until they log in. (Not mobile ready yet)',
            src: techBlog, git: 'https://github.com/ryma1738/tech-blog', deployed: 'https://techblogschoolproject.herokuapp.com/' 
        },
        { 
             id: 3, title: 'Budget Tracker', tech: 'PWA, express.js, MongoDB', 
            description: "This project was designed to show my knowledge of PWA's This application will still works offline and can be downloaded to a moble app.",
            src: budget_tracker, git: 'https://github.com/ryma1738/budget-tracker', deployed: 'https://budget-tracker-school-project.herokuapp.com/'
        },
        {
            id: 4, title: 'Carbon Watchers', tech: 'mySQL, Express.js, Bcrypt, dotENV, Axios',
            description: 'This was a group project for my coding boot camp involving 2 other people. We included a secure user login and sign up functionality as well as using sessions to persist user data. We used mySql/sequelize to store user data in a database as well as their own personal Carbon Emissions. On this site users can get real numbers on their own carbon emissions from source like driving their own car, an airplane flight, or shipping a package to their home.',
            src: carbon_watchers, git: 'https://github.com/ryma1738/Carbon_Watchers', deployed: 'https://carbonwatchers.herokuapp.com/'
        },
        // {
        //     id: 5, title: 'Ryma1738', tech: 'In Progress',
        //     description: 'This is a website showing off my online alias and different things that I do including: Gaming, Graphic Design, Web Development, and Game Programing / Modding.',
        //     src: ryma, git: 'https://github.com/ryma1738/My-Website', deployed: 'https://ryma1738.github.io/My-Website/'
        // },
        // { 
        //      id: 6, title: 'Project 3', tech: 'MERN Stack', 
        //      description: '', 
        //      src: '', git: '', deployed: '' 
        // }
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
<Container fluid="xl" style={{'height': '90vh'}}>
    <Row>
        <div>
            <Carousel className="mt-4" activeIndex={index} onSelect={handleSelect} style={{'border': '5px solid var(--background)'}}>
                {websites.map((item) => (
                    <Carousel.Item interval={10000}>
                        <img src={item.src}
                        alt={item.title}
                        key={item.title}
                        className="slideshow" />
                        <Carousel.Caption className='d-flex justify-content-center'>
                            <div className='bg-slide bg-dark' style={{'width': ''}}>
                                <h3>{item.title}</h3>
                                <p>{item.tech}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </Row>
    <Row>
        <div className="py-4">
            {websites.map((item) => (
                <div className={`${index === item.id ? 'd-block' : 'd-none'} bg-dark py-1 px-3`} 
                id={'slide' + item.id} 
                key={item.id}>
                    <Row className='d-flex align-items-center'>
                        <Col md={2} className='d-flex justify-content-center mt-4 mt-md-0'>
                            <a className='me-4 icon-links' href={item.git} target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            
                            <a href={item.deployed} className='icon-links' target='_blank' rel='noreferrer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                </svg>
                            </a>
                        </Col>
                        <Col md={10} className='d-flex justify-content-center'><p className='text-center pt-3'>{item.description}</p></Col>

                    </Row>
                </div>
            ))}         
        </div> 
    </Row>
</Container>
    );
}

export default Portfolio;