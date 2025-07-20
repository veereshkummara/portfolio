import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <div className="worksImgWrapper">
                    <img src={Portfolio1} alt="" className="worksImg" />
                    <div className="worksImgOverlay"></div>
                    <span className="worksImgTitle"><a href='https://chat-app-8weo.onrender.com/' target='_blank' rel='noopener noreferrer'>Chat App</a></span>
                </div>
                <div className="worksImgWrapper">
                    <img src={Portfolio2} alt="" className="worksImg" />
                    <div className="worksImgOverlay"></div>
                    <span className="worksImgTitle"><a href='https://veereshkummara.github.io/estore/' target='_blank' rel='noopener noreferrer'>E-Store</a></span>
                </div>
                <div className="worksImgWrapper">
                    <img src={Portfolio3} alt="" className="worksImg" />
                    <div className="worksImgOverlay"></div>
                    <span className="worksImgTitle"><a href='https://chat-app-8weo.onrender.com/' target='_blank' rel='noopener noreferrer'>Project One</a></span>
                </div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;