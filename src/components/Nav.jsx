import React from 'react';
import '../styles/Nav.scss';


export default function Nav() {

  return (
    <>
      <div className="Nav">
        <ul>
          <li className='active'><a href="/home">Home</a></li>
          <li className='active'><a href="/news">News</a></li>
          <li className='active'><a href="/performers">Performers</a></li>
          <li className='active'><a href="/favorites">Favorites</a></li>
          <li className='active'><a href="/profile">Profile</a></li>
        </ul>
      </div>
    </>
  )
}


