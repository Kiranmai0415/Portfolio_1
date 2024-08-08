import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Components/Main'
import Resume from '../Components/Resume'
import Project from '../Components/Project'
import Contact from '../Components/Contact'


function Routing() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/main' element={<Main/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/project' element={<Project/>}/>
                    <Route path='/contact' element= {<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Routing