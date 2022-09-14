import React from 'react';
import '../styles/Nav.scss';


export default function Nav() {
  return (
    <>
      <div className="Nav">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#performers">Performers</a></li>
          <li><a href="#favorites">Favorites</a></li>
        </ul>
      </div>
    </>
  )
}


