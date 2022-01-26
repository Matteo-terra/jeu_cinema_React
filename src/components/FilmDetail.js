import {filmDetail} from '../data/FilmData.js'
function FilmDetail(){
    return(
        <div>
            <ul>
            {filmDetail.map((film,index)=>(
                <li>
                    <h2>{film.Nom}</h2>
                    {film.Genre}<br/>
                    {film.Annee}<br/>
                    {film.Description}<br/>
                    {film.Rang}<br/>
                </li>
            ))}
        </ul>
            <button>Ajouter</button>
        </div>
    )
}
export default FilmDetail