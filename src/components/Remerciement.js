import "../styles/ListeEnvie_Recap.css";
import RecapBoucle from "./RecapBoucle";


function Remerciement() {
    var prenom = localStorage.getItem("prenom", prenom);
    var nom = localStorage.getItem("name", nom);
    var email = localStorage.getItem("email", email);
    var score = localStorage.getItem("score", score);

    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const currentTime = day + "/"+ month + 1 + "/" + year

    return (
        <div className="remerciement">
            <div className="pageHeader">
                <h2>Merci de votre participation !</h2>
                <p>(enregistré au {currentTime})</p>
            </div>

            <div>
                <h3>Vos informations sont :</h3>
                <p>Prénom Nom : {prenom} {nom}</p>
                <p>Email : {email}</p>
                <p>Votre score a été de : {score}</p>
            </div>

            <div>
                <h4>Vous avez une chance de remporter {score} place(s) pour les films suivants :</h4>
                <RecapBoucle/>
            </div>
        </div>
    );
}

export default Remerciement;