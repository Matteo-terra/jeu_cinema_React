import React, { useState } from 'react';
import axios from 'axios';
import "../styles/InTheaterStyle.css";
import FilmDetail from './FilmDetail';
import { useNavigate } from 'react-router-dom';


function InTheaterFilms() {
    const navigate = useNavigate()

    const [films, setFilms] = useState(null);
    const [show, setShow] = useState(false);

    const imdbBaseURL = "https://imdb-api.com/en/API/";
    const apiTitle = "ComingSoon/";
    const token = "k_u72v1zov";
    const urlBuilder = imdbBaseURL + apiTitle + token
  
    const fetchData = async () => {
      const response = await axios.get(urlBuilder)
  
      setFilms(response.data.items) 
    }

    function handleClickSee() {
      navigate('/listeEnvie');
    }
    
    var compteur = 0;
    var nbBonneReponses = localStorage.getItem("score", nbBonneReponses);
  
    return (
        <div className="App">
        <h1>Films a l'affiche</h1>

        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchData}>
            Afficher les Films en salles
          </button>
        </div>

         {/* Display data from API */}
         <div className="films">
            <button onClick={handleClickSee}>Voir ma liste d'envie</button>

          {films && films.map((film, index) => {
            const Date = film.releaseState
            const authors = film.directors
            const image = film.image
            const titre = film.title

            var addButtonText = "Ajouter à ma liste d'envie"

            // useState ne fonctionne pas à l'intérieur d'un map
            //const [addButtonText, updateAddButtonText] = useState("Ajouter à ma liste d'envie")

            function handleClickAdd(titre, imageURL) {
              console.log("le compteur était à " + compteur)
              if (addButtonText === "Ajouter à ma liste d'envie" && compteur < nbBonneReponses) {
                compteur ++

                localStorage.setItem("titre " + compteur, titre)
                localStorage.setItem("image " + compteur, imageURL)
                localStorage.setItem("compteur", compteur)

                alert("Le film a bien été ajouté à votre liste d'envie, il vous reste "+ (nbBonneReponses - compteur) +" film(s) à sélectionner")
                addButtonText = "Supprimer de ma liste d'envie"
              } else if (addButtonText === "Supprimer de ma liste d'envie") {
                alert("Le film a déjà été ajouté à votre liste d'envie, il vous reste "+ (nbBonneReponses - compteur) +" film(s) à sélectionner")
              } else {
                alert("Le nombre maximum de films pouvant être sélectionnés (égal à votre nombre de bonnes réponses -> " + nbBonneReponses + ") à été atteint!")
              }
              console.log("il est maintenant à " + compteur)
            }

            return (
              <div className="film" key={index}>
                <h2>{film.title}</h2>

                <div className="details">
                    <img src= {image} onClick={() => setShow(true)} />
                    <p>👨: {authors}</p>
                    <p>⏰: {Date}</p>
                    {(addButtonText === "Ajouter à ma liste d'envie") && <button onClick={() => handleClickAdd(titre, image)}>Je veux le voir</button>}
                    {(addButtonText === "Supprimer de ma liste d'envie") && <button onClick={() => handleClickAdd(titre, image)}>Supprimer de ma liste d'envie</button>}
                  
                    <FilmDetail title={titre} onClose={() => setShow(false)} show={show}>
                      <ul>
                        <li>Genre : {film.genres}</li>
                        <li>Année : {film.year}</li>
                        <li>Description : {film.plot}</li>
                        <li>Rang RT : Film not out yet </li>
                      </ul>
                    </FilmDetail>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

  }
  export default InTheaterFilms;
