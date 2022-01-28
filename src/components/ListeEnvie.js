import ListeEnvieBoucle from "./ListeEnvieBoucle";
import "../styles/ListeEnvie.css";


function ListeEnvie() {
    var prenom = localStorage.getItem("prenom", prenom);

    return (
        <div className="listeEnvie">
            <h2>Liste d'envie de {prenom} :</h2>
            <ListeEnvieBoucle/>
        </div>
    );
}

export default ListeEnvie;