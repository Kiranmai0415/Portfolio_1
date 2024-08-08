import React from 'react';
import Headers from './Headers';
import './Portfolios.css';
import Footer from './Footer';
import Todoapp from '../Images/Todoapp.png';
import Game from '../Images/Game.png';
import MusicPlayer from '../Images/MusicPlayer.png'

const Project = () => {
  return (
    <>
      <Headers />
      <h2 className='project-h2'>Kiranmai's Portfolio</h2>
      <div className='project-info'>
        <div className='project-details'>
          <h3 style={{ margin: "20px" }}>To do List 01</h3>
          <p className='project-summary'>
            The To-Do List project is a web application designed
            to help users organize and manage their tasks effectively.
            This project utilizes HTML, CSS, JavaScript, React Js to create
            an interactive user interface for adding, editing, and
            deleting tasks.
          </p>
        </div>
        <div className='project-image'>
          <img src={Todoapp} alt="Todoapp" />
        </div>
      </div>
      <div className='project-info'>
        <div className='project-details'>
          <h3 style={{ margin: "20px" }}>Tic Tac Toe 02</h3>
          <p className='project-summary'>
            The Tic Tac Toe game is a classic and timeless two-player game that is both simple to learn and enjoyable to play. It serves as a great way to challenge your mind, relieve stress, and entertain yourself during breaksThe Tic Tac Toe game project is a testament to my ability to create engaging and interactive web applications using basic web technologies. It demonstrates my skills in HTML, CSS, and JavaScript, as well as my understanding of game development concepts.</p>
        </div>
        <div className='project-image'>
          <img src={Game} alt="TicTacToe" />
        </div>
      </div>
      <div className='project-info'>
        <div className='project-details'>
          <h3 style={{ margin: "20px" }}> Music player 03</h3>
          <p className='project-summary'>
            The Music Player project is a feature-rich web application designed to provide users with an enjoyable and intuitive music listening experience. This project leverages HTML, CSS, and JavaScript to create a seamless interface for playing, pausing, and navigating through songs. It aims to offer a modern and user-friendly design, combined with essential music player functionalities.
          </p></div>
        <div className='project-image'>
          <img src={MusicPlayer} alt="Music Player" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
