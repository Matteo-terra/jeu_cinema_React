import "../styles/ListeEnvie_Recap.css";

function RecapBoucle() {
    var nombreFilms = 1;
    var nbBonneReponses = localStorage.getItem("score", nbBonneReponses);
    var list = [];
    var listFinal = [];

    var compteurFilm = localStorage.getItem("compteur", compteurFilm);


    while (nombreFilms <= nbBonneReponses) {
        const numFilmTitre = "titre " + nombreFilms;
        const numFilmImg = "image " + nombreFilms;

        var titre = localStorage.getItem(numFilmTitre, titre);
        var imageURL = localStorage.getItem(numFilmImg, imageURL);
        
        nombreFilms ++
        const numFilm = nombreFilms - 1

        if (titre != null) {
            list = listFinal.push({titreList: titre, imageUrlList: imageURL, numFilmTitreList: numFilmTitre, numFilmImgList: numFilmImg})
        }
    }

    return(
        <div className="recapFilms">
            {listFinal.map((listElement, index) => (
                <div className="recapFilm" key={index}>
                    <p key={`${listElement.titreList}`}>
                        {listElement.titreList}
                    </p>
                    <img src= {listElement.imageUrlList}/>
                </div>
                
            ))}
        </div>
    );
}

export default RecapBoucle;