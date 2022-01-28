import "../styles/ListeEnvie.css";

function ListeEnvieBoucle() {
    var compteurNbFilm = 1;
    const nbBonneReponses = 3;
    var list = [];
    var listFinal = [];
    var id = 1;

    while (compteurNbFilm <= nbBonneReponses) {
        const numFilmTitre = "titre " + compteurNbFilm;
        const numFilmImg = "image " + compteurNbFilm;
        console.log("Le compteurNbFilm était à " + compteurNbFilm)
        var titre = localStorage.getItem(numFilmTitre, titre);
        var imageURL = localStorage.getItem(numFilmImg, imageURL);
        compteurNbFilm ++
        console.log("Le compteurNbFilm est maintenant à " + compteurNbFilm)
        const numFilm = compteurNbFilm - 1
        if (titre != null) {
            list = listFinal.push({titreList: titre, imageUrlList: imageURL, numFilmTitreList: numFilmTitre, numFilmImgList: numFilmImg})
        }
        console.log(listFinal)
    }

    function handleClickSupp(numFilmTitre, numFilmImgList) {
        localStorage.removeItem(numFilmTitre);
        localStorage.removeItem(numFilmImgList);
        window.location.reload(false);
    }
    
    function handleClickSuppAll() {
        var arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (var i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).substring(0,5) == "titre") {
                arr.push(localStorage.key(i));
            } else if (localStorage.key(i).substring(0,5) == "image"){
                arr.push(localStorage.key(i));
            }
        }

        // Iterate over arr and remove the items by key
        for (var i = 0; i < arr.length; i++) {
            localStorage.removeItem(arr[i]);
        }

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
                    <button onClick={() => handleClickSupp(listElement.numFilmTitreList, listElement.numFilmImgList)}>Supprimer de ma liste d'envie</button>
                </div>
                
            ))}
            <button onClick={() => handleClickSuppAll()}>Vider la liste d'envie</button>
        </div>
    );
}

export default ListeEnvieBoucle;