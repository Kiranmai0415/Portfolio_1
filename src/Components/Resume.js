import React from 'react'
import './Portfolios.css'
import Headers from './Headers';
import Footer from './Footer';

function Resume() {

    return (
        <>
            <Headers />
            <h2 className='project-h2'>Kiranmai's Portfolio</h2>
            <div className="resume-info">
                <div className="resume-details">
                    <h3>Work Experience</h3>
                    <div className="resume-exp">
                        <div className="year">2021 - 2023</div>
                        <div className="description">
                            <p>Worked as a React.js Developer, focusing on building and maintaining dynamic and responsive web applications. Responsibilities included designing user interfaces, integrating APIs, and optimizing performance.</p>
                        </div>
                    </div>
                </div>
                <div style={{ border: "1px solid black" }}></div>
                <div className="resume-details">
                    <h3>Education </h3>
                    <div className="resume-exp">
                        <div className="year">Osmania University College for Women | Master's Degree in Computer Science</div>
                        <div className="description">
                            <p>
                                My academic journey equipped me with a solid foundation in computer science, providing me with the knowledge and skills necessary to thrive in the dynamic field of web development.
                            </p>
                        </div>
                    </div>
                    <div className="resume-exp">
                        <div className="year">Kakatiya University | Bachelor's Degree in Computer Science</div>
                        <div className="description">
                            <p>
                                My Graduation laid the groundwork for my future career, nurturing my passion for technology and innovation</p>
                        </div>
                    </div>
                </div>
                <div style={{ border: "1px solid black" }}></div>
                <div className="resume-details">
                    <h3>Skills & Expertise</h3>
                    <div className="resume-exp">
                        <div className="year"> Html5, CSS3, JavaScript, React Js, REST API, Bootstrap, Redux, GitHub, Json, C-language, Python, SQL</div>
                        <div className="description">
                            <p>
                                I have hands-on experience designing and implementing responsive and interactive web applications. My expertise extends to using Bootstrap for styling, Redux for state management, and integrating REST APIs to enhance application functionality.
                                I’m passionate about learning new technologies and am comfortable adapting to different tech stacks with guidance. My focus is on creating user-friendly and efficient web solutions while continually improving my skill set.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Resume;
