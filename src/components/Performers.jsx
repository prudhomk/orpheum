import React from 'react';
import Nav from '../components/Nav';
import Performer from './Performer';
import { usePerformers } from '../state/customHooks.js';

export default function Performers() {

  const { performers } = usePerformers();

  const performerElements = performers.map(per => (
    <li key={per.id}>
      <Performer {...per}/>
    </li>
  ));

  return (
    <>
    <Nav/>
      <div>
        <h1>Performers</h1>
        <ul>{performerElements}</ul>
      </div>
    </>

  );
};
