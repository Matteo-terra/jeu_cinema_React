import "../styles/ListeEnvie_Recap.css";

function ListeEnvieBoucle() {
    var nombreFilms = 1;
    var nbBonneReponses = localStorage.getItem("score", nbBonneReponses);
    var list = [];
    var listFinal = [];

    var compteurFilm = localStorage.getItem("compteur", compteurFilm);


    while (nombreFilms <= nbBonneReponses) {
        const numFilmTitre = "titre " + nombreFilms;
        const numFilmImg = "image " + nombreFilms;
        console.log("Le nombreFilms était à " + nombreFilms)
        var titre = localStorage.getItem(numFilmTitre, titre);
        var imageURL = localStorage.getItem(numFilmImg, imageURL);
        nombreFilms ++
        console.log("Le nombreFilms est maintenant à " + nombreFilms)
        const numFilm = nombreFilms - 1
        if (titre != null) {
            list = listFinal.push({titreList: titre, imageUrlList: imageURL, numFilmTitreList: numFilmTitre, numFilmImgList: numFilmImg})
        }
        console.log(listFinal)
    }

    function handleClickSupp(numFilmTitre, numFilmImgList) {
        localStorage.removeItem(numFilmTitre);
        localStorage.removeItem(numFilmImgList);
        window.location.reload(false);

        compteurFilm --
        localStorage.setItem("compteur", compteurFilm)
    }
    
    function handleClickSuppAll() {
        var arr = []; // Array qui contient les keys
        // Itérer dans localStorage et insérer les keys qui répondent aux conditions dans l'array
        for (var i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).substring(0,5) == "titre") {
                arr.push(localStorage.key(i));
            } else if (localStorage.key(i).substring(0,5) == "image"){
                arr.push(localStorage.key(i));
            }
        }

        // Itérer dans l'array et supprimer les items en fonction de leur key
        for (var i = 0; i < arr.length; i++) {
            localStorage.removeItem(arr[i]);
        }

        localStorage.removeItem("compteur");

        window.location.reload(false);
    }

    return(
        <div className="panierFilms">
            {listFinal.map((listElement, index) => (
                <div className="panierFilm" key={index}>
                    <p key={`${listElement.titreList}`}>
                        {listElement.titreList}
                    </p>
                    <img src= {listElement.imageUrlList}/>
                    <button className="supp-button" onClick={() => handleClickSupp(listElement.numFilmTitreList, listElement.numFilmImgList)}>Supprimer de ma liste d'envie</button>
                </div>
                
            ))}
            <button className="suppAll-button" onClick={() => handleClickSuppAll()}>Vider la liste d'envie</button>
        </div>
    );
}

export default ListeEnvieBoucle;