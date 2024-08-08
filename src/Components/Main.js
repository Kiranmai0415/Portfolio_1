import React from 'react'
import Headers from './Headers';
import Footer from './Footer';
import Kiranmai from '../Images/Kiranmai.jpg'
import './Portfolios.css'

function Main() {

    return (
        <>
            <Headers />
            <div className='container'>
                <div>
                    <img src={Kiranmai} alt='kiranmai' className='image' />
                </div>
                <div className='myself'>
                    <span className='hello'>Hello</span>
                    <div>
                        <p> A bit About Me </p>
                        <span>
                            I’m a passionate Frontend Developer with experience in HTML, CSS, JavaScript, and React JS. I specialize in creating responsive, user-friendly web applications and integrating APIs. Skilled in using Bootstrap and Redux, I’m committed to continuous learning and adapting to new technologies. My goal is to deliver innovative solutions and exceptional user experiences.
                        </span>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
export default Main