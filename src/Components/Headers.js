import React from 'react'
import "./Portfolios.css";

function Headers() {
    return (
        <>
            <nav>
                <div className='header'>
                    <h3>Kiranmai UR</h3>
                    <span>React Js Developer</span>
                    <hr />
                </div>
                <div className='links'>
                    <a href='main' >Main |</a>
                    <a href='resume' >Resume |</a>
                    <a href='project' >Projects |</a>
                    <a href='contact' >Contact </a>
                </div>
            </nav>
            <div style={{ border: "1px solid black" }}></div>
        </>
    );
}

export default Headers