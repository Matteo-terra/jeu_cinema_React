import FilmDetail from './FilmDetail';
import React, { useState } from "react";

function TestFilmDetail() {

  const [show, setShow] = useState(false);

  return (
    <div className="Test">
      <button onClick={() => setShow(true)}>Voir Film</button>
      <FilmDetail title="Red notice" onClose={() => setShow(false)} show={show}>
        <ul>
            <li>Genre : Action</li>
            <li>Année : 2021</li>
            <li>Despriction : Un film Netflix</li>
            <li>Rang RT : 37%</li>
        </ul>
      </FilmDetail>
    </div>
  );
}

export default TestFilmDetail;