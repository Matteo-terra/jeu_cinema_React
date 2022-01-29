import "../styles/ListeEnvie_Recap.css";
import { useNavigate } from 'react-router-dom';
import RecapBoucle from "./RecapBoucle";
import { useState } from "react";


function Recap() {
    var prenom = localStorage.getItem("prenom", prenom);
    var nom = localStorage.getItem("name", nom);

    const navigate = useNavigate()

    function handleClickBack() {
        navigate('/listeEnvie');
    }

    function handleClickValidate() {
        navigate('/remerciement');
    }

    const [validate, updateValidate] = useState(true);

    function handleCheck() {
        var checkbox = document.getElementById("validateCheck");

        if (checkbox.checked == true){
            updateValidate(false)
        } else {
            updateValidate(true)
        }
    }

    return (
        <div className="recap">
            <h2>Récapitulatif :</h2>
            <RecapBoucle/>
            <button onClick={handleClickBack}>Retour à la liste d'envie</button>
            <input type="checkbox" id="validateCheck" name="validateCheck" onClick={handleCheck}/><label id="validateLabel" for="validate">J'accepte le règlement du jeu</label>
            <button id="validateButton" onClick={handleClickValidate} disabled={validate}>Valider</button>
        </div>
    );
}

export default Recap;