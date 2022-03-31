import React from 'react';
import { Row, Col, ProgressBar, Container} from 'react-bootstrap';
import ryan from './assets/Profile.png';

function About() {
    const terms = ['Novice', 'Capable', 'Proficient', 'Effective', 'Expert']
    const aboutList = [
        {title: 'Bootstrap', now: 100, id: 3, term: terms[4]},
        {title: 'Javascript', now: 98, id: 4, term: terms[4]},
        { title: 'HTML/CSS', now: 95, id: 1, term: terms[4] },
        { title: 'MongoDB / Mongoose', now: 92, id: 6, term: terms[3] },
        { title: 'React', now: 90, id: 7, term: terms[3] },
        {title: 'expressJS', now: 90, id: 5, term: terms[3]},
        { title: 'Java Development', now: 85, id: 9, term: terms[3] },
        { title: 'Spring Boot', now: 83, id: 9, term: terms[2] },
        {title: 'SQL', now: 75, id: 8, term: terms[2]},
        
    ];

    return (
<Container fluid="xl" className=" px-3 px-md-2 mb-3">
    <Row style={{}}>
        <Col sm={12} md={6} className="d-flex justify-content-center py-5 align-items-center about-title">
                <div>
                <h2 className="mmd">hello, i'm ryan.</h2>
                <h3>I am a Full Stack Web Developer</h3>
            </div>
        </Col>
        <Col sm={12} md={6} className="d-flex justify-content-center mt-2 mb-3 align-items-center">
            <img alt="Ryan Jepson" src={ryan}  className="img-ryan p-5"/>
        </Col>
    </Row>

    <Row>
        <Col sm={12} md={6}>
            <div>
                <h3 className="mmd about-head text-center pb-2">About Me</h3>
                <p className="text-center py-2" style={{'fontSize': '1.4em'}}>
                   I am a full stack web developer with knowledge in MERN full stack development and Java full stack development.
                   I earned a certificate in Full Stack Web Development from the University of Utah Coding Boot Camp. 
                   I am confident in my abilities to create full stack production web applications using the skills 
                   I have learned, and I am equally confident in my ability to learn new skills. I am a natural problem solver, 
                   creative thinker, leader, team player, have great attention to detail and I have very high standards when it 
                   come to the quality of my code.
                </p>
            </div>
            <div>
                <h3 className="mmd about-head text-center pb-2">hobbies and interests</h3>
                <p className="text-center py-2" style={{'fontSize': '1.4em'}}>
                    My favorite thing to do in my free time is play video games with my friends. 
                    I also enjoy cars / car meets. My car is a Toyota 86 2017 and am working towards 
                    a super charger. I'm currently working towards improving my programming skills over 
                    all, and hope to create my own video games in the future.
                </p>
            </div>
        </Col>
        <Col sm={12} md={6} className="ck">
            <div>
                <h3 className="mmd text-center about-head pb-2">coding Knowledge</h3>
                <ul className="p-0" style={{'listStyleType': 'none'}}>
                    {aboutList.map((item) => (
                        <li key={item.id}>
                            <div className="about-list">
                                <div>
                                    <p className="pt-2 text-center">{item.title}</p>
                                </div>
                                <ProgressBar now={item.now} variant="dark" 
                                label={`${item.term}`} className="my-0"
                                style={{'height': '25px', 'fontSize': '.8em'}}></ProgressBar>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Col>
    </Row>
</Container>
    );
}

export default About;