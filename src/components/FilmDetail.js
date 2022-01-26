import React from "react"
import Modal from "../styles/Modal.css"

const FilmDetail = props =>{    
        if(!props.show){
            return null
        }
    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="model-footer">
                <button onClick={props.onClose} className="button">Close</button>
           </div>
            </div>
        </div>
    )
}
export default FilmDetail