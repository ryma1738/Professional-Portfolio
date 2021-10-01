import React from 'react';
import { Row, Col, ProgressBar, Container} from 'react-bootstrap';
import ryan from './assets/Profile.png';

function About() {
    const terms = ['Novice', 'Capable', 'Proficient', 'Effective', 'Expert']
    const aboutList = [
        {title: 'HTML/CSS', now: 95, id: 1, term: terms[4]},
        {title: 'Bootstrap', now: 90, id: 3, term: terms[3]},
        {title: 'Javascript', now: 88, id: 4, term: terms[3]},
        {title: 'expressJS', now: 80, id: 5, term: terms[3]},
        {title: 'React', now: 70, id: 6, term: terms[2]},
        {title: 'SQL', now: 70, id: 7, term: terms[2]},
        {title: 'MongoDB / Mongoose', now: 60, id: 8, term: terms[2]},
        {title: 'Python', now: 30, id: 9, term: terms[0]}
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
                <h3 className="mmd about-head text-center pb-2">hobbies and interests</h3>
                <p className="text-center py-2" style={{'fontSize': '1.4em'}}>
                    My favorite thing to do in my free time is play video games with my friends. 
                    I also enjoy cars / car meets. My car is a Toyota 86 2017 and am working towards 
                    a super charger. I'm currently working towards improving my programming skills to the
                    point that I can create my own video games.</p>
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