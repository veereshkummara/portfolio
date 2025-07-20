import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import leetcodeIcon from '../../assets/leetcode.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Achievements </h1>
                <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. 
                    Some of the notable companies I have worked with includes
                </span>
                <div className="clientImgs"> 

                    <div className="customAchievement">
                        <p className="achievementTitle">IDeathon'24</p>
                        <p className="achievementSubtitle">5th place among 100+ teams  Presented innovative tech solutions in a competitive ideation challenge. </p>
                    </div>
                    <div className="customAchievement">
                        <p className="achievementTitle">PI PRO</p>
                        <p className="achievementSubtitle">3rd place among 200+ participants. Recognized for strong communication and analytical problem-solving.</p>
                    </div>
                    <div className="customAchievement">
                        <p className="achievementTitle">Dance-Solo</p>
                        <p className="achievementSubtitle">Winner of the annual dance competition. Demonstrated exceptional dance skills and stage presence.</p>
                    </div>

                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href='https://in.linkedin.com/in/veereshkummara' target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt="Facebook" className="link" /></a>
                        <a href='https://leetcode.com/u/veereshkummara/' target='_blank' rel='noopener noreferrer'><img src={leetcodeIcon} alt="Twitter" className="link" /></a>
                        <a href='https://github.com/veereshkummara' target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt="YouTube" className="link" /></a>
                        <a href='https://www.instagram.com/veereshh.07/' target='_blank' rel='noopener noreferrer'><img src={instagramIcon} alt="Instagram" className="link" /></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;