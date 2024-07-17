import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const formParams = {
            from_name: name,
            from_email: email,
            to_name: 'Anjali Dulam',
            message: message,
        };

        emailjs.send('service_ptw0wdt', 'template_896c8fk', formParams, 'QyQF79CeIpnsbk1FA')
        .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!', result);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
    };

    return (
        <div className="contact-container">
            <h3>Contact Us</h3>
            <form onSubmit={sendEmail} className='emailForm'>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Message:</label>
                <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="Send Email" />
            </form>
        </div>
    );
};

export default ContactUs;
