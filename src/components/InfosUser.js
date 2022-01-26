import { useEffect } from "react"

function InfosUser(props) {
    useEffect(()=>{alert('Le nom est :'+ props.selection)}, [])
    return(
        <div>
            <div>Le nom de l'utilisateur est {props.selection}</div>
        </div>
    )
}
export default InfosUser