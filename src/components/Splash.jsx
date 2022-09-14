import '../styles/Splash.scss';
import React from 'react'
import { useNavigate } from 'react-router';

export default function Splash() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="Splash">
      <header className="Splash-header">
        <img className="logo" src="logo-c.jpeg" alt="logo"></img>
      </header>
      <div>
        <p>
          all the world is a stage and we are all players.
        <br></br>
          let us be a safe haven for those who perform in the night.</p>

       <div class="btn" onClick={handleClick}>
          <span class="btn__text">Enter</span>
          <span class="btn__spotlight"></span>
       </div>

      </div>
    </div>
  );
}