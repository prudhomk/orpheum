import React from 'react';
import { Link } from 'react-router-dom';

export default function Performer({ id, username, image }) {
  return (
    <>
      <Link to={`/performers/${id}`}>
        <div className="performer">
          <p>{username}</p>
          {/* image stored via database?   */}
          <img src={image} alt="profile icon"/>
        </div>
      </Link>
    </>
  )
}
