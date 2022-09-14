import React from 'react';
import Nav from '../components/Nav';
import '../styles/Home.scss';

export default function Home() {
  return (
    <>
    <Nav/>
    <div className="Home">

      {/* Sub in user via state */}
      <h1>Welcome user!</h1>
      <div>
        <h3>Lastest submissions from performers you follow:</h3>
        {/* Sub in content from user's followers by date uploaded */}
          <div>
            Content
          </div>
      </div>
    </div>
    </>
  )
}
