import React from 'react'
import "./Portfolios.css"
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'
import sandbox from '../Images/sandbox.png'

function Footer() {

    return (
        <>
            <div style={{ border: "1px solid black" }}></div>
            <section className='footer'>
                <div className='foot'>
                    <label>Phone</label>
                    <p>9885565700</p>
                </div>
                <div className='foot'>
                    <label>Email</label>
                    <p>ubbanirubenkiranmai@gmail.com</p>
                </div>
                <div className='foot'>
                    <label>Links</label>
                    <p>
                        <a href="https://www.linkedin.com/in/kiranmai-ubbani-7a40a620a/" target='_blank'><img src={linkedin} alt="Linkedin" id='link' /></a>
                        <a href="https://github.com/Kiranmai0415" target='_blank'><img src={github} alt="GitHub" id='link' /></a>
                        <a href="https://codesandbox.io/dashboard/recent" target='_blank'><img src={sandbox} alt="CodeSandbox" id='link' /></a>
                    </p>
                    {/* <p>Linkedin | Github | Sandbox</p> */}
                </div>
                <div className='foot'>
                    <p>@Developed By Kiranmai.</p>
                </div>
            </section>
        </>
    );
}
export default Footer