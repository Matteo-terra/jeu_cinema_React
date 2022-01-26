import React, { useState } from 'react';
import axios from 'axios';
import "../Style/Style.css";

function InTheaterFilms() {
    const [films, setFilms] = useState(null);

    const imdbBaseURL = "https://imdb-api.com/en/API/";
    const apiTitle = "ComingSoon/";
    const token = "k_rttyh7sy";
    const urlBuilder = imdbBaseURL + apiTitle + token
  
    const fetchData = async () => {
      const response = await axios.get(urlBuilder)
  
      setFilms(response.data.items) 
    }
  
    return (
        <div className="App">
        <h1>Films a l'affiche</h1>
        <h2>Fetch the list from IMDB API and display it</h2>

        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchData}>
            Afficher les Films en salles
          </button>
        </div>

         {/* Display data from API */}
         <div className="films">
        {films && films.map((film, index) => {
            const Date = film.releaseState
            const authors = film.directors
            const image = film.image

            return (
              <div className="film" key={index}>
                <h2>{film.title}</h2>

                <div className="details">
                    <img src= {image} />
                    <p>👨: {authors}</p>
                    <p>⏰: {Date}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

  }
  export default InTheaterFilms;
