import React, { useState } from 'react';
import { Container, Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';
import { emailApiCall } from '../../utils/api';


function Contact() {

    const [formValues, setFormValues] = useState({ subject: '', email:'', message:''});
    const [valid, setValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(true);
    const {subject, email, message } = formValues;
    const [sent, setSent] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
            const response = await emailApiCall(formValues.email, formValues.subject, formValues.message);
            if (response.ok) {
                setShowModal(false);
                setSent(true);
                setFormValues({ subject: '', email: '', message: '' });
                setValid(false);
            } else setErrorMessage('Something went wrong. Please check inputs and try again.'); 
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            setValid(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
        }
    }

    return (
<Container fluid='xl' style={{ 'height': '85vh' }}>
    <Row>
        <Col md={6} className="contact-sm" style={{ 'height': '30vh'}}>
            {/* contact info */}
            <ul className="mt-4 contact-border" style={{ 'listStyle': 'none'}}>
                <li className="d-flex align-content-center">
                    <a 
                    href="mailto:RyanJepson.webdev@gmail.com" 
                    className='icon-links px-2' target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="contact-icons p-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                    </a>
                    <p className="ps-2">RyanJepson.webdev@gmail.com</p>
                </li>
                <li className='pt-2 d-flex align-items-center'>
                    <a 
                    href="https://www.linkedin.com/in/ryan-jepson-25616520b/" 
                    className='icon-links px-2' target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="contact-icons p-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    <p className="ps-2">Message me on LinkedIn.</p>
                </li>
                <li className='pt-2'>
                    <div className="px-2 d-flex align-items-center">
                        <div className="contact-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="p-2" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                                <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                            </svg>
                        </div>
                        <p className="ps-3">Discord Username: ryma1738#9453</p>
                    </div>
                </li>
            </ul>
        </Col>
        <Col md={6}  className="mt-4" style={{'height': '30vh'}}>
            <h3 className={`${sent ? '' : 'd-none'} text-center`} 
            style={{'textShadow': '1px 1px 5px black'}}>Message was sent successfully! I will get back with you as soon as I can thank you for your interest!</h3>
            <div className="d-flex justify-content-center">
                <button className="mmd form-button px-4 py-1 mt-3" 
                type='button' 
                onClick={() => setShowModal(!showModal)} 
                style={{'backgroundColor': 'var(--background)', 'width': '80%' }}>Send Me a Message</button>
            </div>
        </Col>
    </Row>
    <Modal
        show={showModal}
        size="lg"
        aria-labelledby="form"
        centered
        onHide={() => { setShowModal(false); setValid(false); setErrorMessage('');}}
        className='form-modal' 
    >
        <Modal.Header style={{ 'borderBottom': '2px solid var(--teal' }}>
            <Modal.Title id="form" className='form-header mmd'>
                Send Me a Message
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 'borderBottom': '2px solid var(--teal' }}>
            <form className='form-div mt-0' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" style={{'width': '100%'}}>Email:</label>
                    <input 
                    type='email' 
                    className="form-input px-2 mx-2 mb-3 mt-2" 
                    style={{ 'width': '75%' }} 
                    defaultValue={email} 
                    onBlur={handleChange} 
                    name='email' required />
                    <OverlayTrigger placement="right" overlay={<Tooltip id='emailValid'>Your Email is Valid</Tooltip>}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`${valid ? '' : 'd-none'} check-mark`} onMouseOver={() => setEmailValid(true)} onMouseLeave={() => setEmailValid(false)} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    </OverlayTrigger>
                </div>
                <div>
                    <label htmlFor='subject' className=''>Subject:</label>
                    <input 
                    type='text' 
                    className="form-input px-2 mx-2 mb-3 mt-2" 
                    style={{'width': '90%'}} 
                    defaultValue={subject} 
                    onBlur={handleChange} 
                    name='subject' 
                    required />
                </div>
                <div>
                    <label htmlFor='message' style={{ 'width': '100%' }}>Message:</label>
                    <textarea 
                    defaultValue={message} 
                    onBlur={handleChange} 
                    rows={5} 
                    className='form-input px-2 mx-2 mb-3 mt-2' 
                    style={{'width': '90%'}} 
                    name="message" 
                    required />
                </div>
                <div className='d-flex'>
                    <div>
                        <button className="form-button px-4 py-1" type='submit' disabled={valid && !errorMessage ? '' : 'disabled'}>Send</button>
                    </div>
                    <div className='px-3'>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer style={{'border': 'none'}}>
            <button 
            className="form-button px-4 py-1" 
            onClick={() => {setShowModal(false); setValid(false); setErrorMessage('');}}>Close</button>
        </Modal.Footer>
    </Modal>   
</Container>
    );
}

export default Contact;