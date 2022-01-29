import ListeEnvieBoucle from "./ListeEnvieBoucle";
import "../styles/ListeEnvie_Recap.css";
import { useNavigate } from 'react-router-dom';


function ListeEnvie() {
    var prenom = localStorage.getItem("prenom", prenom);
    var nom = localStorage.getItem("name", nom);

    var compteurFilm = localStorage.getItem("compteur", compteurFilm);
    var score = localStorage.getItem("score", score);

    const navigate = useNavigate()

    function handleClickBack() {
        navigate('/listeFilm');
    }

    function handleClickRecap() {
        navigate('/recap');
    }

    return (
        <div className="listeEnvie">
            <h2>Liste d'envie de {prenom} {nom} :</h2>
            <ListeEnvieBoucle/>
            <button onClick={handleClickBack}>Retour à la sélection de films</button>
            {(compteurFilm === score) && <button className="recapButton" onClick={handleClickRecap}>Tenter de gagner vos places</button>}
        </div>
    );
}

export default ListeEnvie;