// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur le portail des guides académiques</h1>
      <p>Sélectionnez un guide pour commencer :</p>
      <ul>
        <li>
          <Link className="b"  to="/guide1">Guide 1 : Ouvrir une École de Développement Web à Malaga</Link>
        </li>
        <li>
          <Link className="b" to="/guide2">Guide 2 : [Centre de formation privé]</Link>
        </li>
        <li>
          <Link className="b" to="/guide3">Guide 3 : [Centre de formation professionelle continue]</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
