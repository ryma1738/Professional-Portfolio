import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resume from './assets/Ryan-Jepson.docx';

function Resume() {

    return (
        <Container fluid='xl' style={{'minHeight': '85vh'}}>
            <Row>
                <div className="d-flex justify-content-center align-content-center mt-4">
                    <a href={resume} className="mmd text-center" id="resume-download" download>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Download My Resume
                    </a>
                </div>
            </Row>
            <Row className="mt-5 pb-3">
                <Col md={6} className='contact-border d-flex justify-content-center mt-3'>
                    <div>
                        <div className='d-flex'>
                            <h3 className="mmd resume-heads ms-4">skills</h3>
                        </div>
                        <ul style={{'listStyle': 'none'}}>
                            <li>Leadership</li>
                            <li>Team Work</li>
                            <li>Organizational Skills</li>
                            <li>Constructive Feedback</li>
                            <li>Fast Learner</li>
                            <li>Creativity Skills</li>
                            <li>Problem Solving</li>
                            <li>Fast Bug fixing</li>
                            <li></li>
                        </ul>
                    </div>
                </Col>
                <Col md={6} className='d-flex justify-content-center mt-3'>
                    <div>
                        <div className='d-flex'>
                            <h3 className="mmd resume-heads ms-4">tools/tech</h3>
                        </div>
                        <ul style={{ 'listStyle': 'none' }}>
                            <li>HTML/CSS/Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>REST Api's</li>
                            <li>SQL</li>
                            <li>NoSQL / MongoDB</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 pt-3" style={{'borderTop': '3px solid var(--background)'}}>
                <Col md={6} className='contact-border d-flex justify-content-center mt-3'>
                    <div>
                        <div className='d-flex'>
                            <h3 className="mmd resume-heads ms-4">education</h3>
                        </div>
                        <ul style={{ 'listStyle': 'none' }}>
                            <li>
                                University of Utah
                                <ul>
                                    <li>Web Development Bootcamp</li>
                                    <li>6 Months</li>
                                </ul>
                            </li>
                            <li>
                                Utah Valley University
                                <ul>
                                    <li>1 Semester</li>
                                    <li>Computer Science (Python)</li>
                                </ul>
                            </li>
                            <li>
                                Riverton High School
                                <ul>
                                    <li>Graduated July 2017</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={6} className='d-flex justify-content-center mt-3'>
                    <div>
                        <div className='d-flex'>
                            <h3 className="mmd resume-heads ms-4">experience</h3>
                        </div>
                        <ul style={{ 'listStyle': 'none' }}>
                            <li>
                                Carbon Watchers
                                <ul>
                                    <li>Full ERN Stack App</li>
                                </ul>
                            </li>
                            <li>
                                StickleBricks
                                <ul>
                                    <li>Full MERN Stack E-Commerce App</li>
                                </ul>
                            </li>
                            <li>
                                Work Experience:
                                <ul>
                                    <li>Genspark Full Stack Java Developer
                                        <ul>
                                            <li>3 Months</li>
                                        </ul>
                                    </li>
                                    <li>Appointment Scheduler
                                        <ul>
                                            <li>8 Months</li>
                                        </ul>
                                    </li>
                                    <li>Security Officer
                                        <ul>
                                            <li>2 Years</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

        </Container>

    );
}

export default Resume;