import { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  function validate() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Adresse e-mail valide');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}

function checkEmail(email) {
             var re = "^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
             return re.test(email);
}

  return (
    <form onSubmit={handleSubmit}>
        
      <label>Nom :
      <input 
        type="text" 
        name="nom" 
        value={inputs.nom || ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label>Prénom :
      <input 
        type="text" 
        name="prenom" 
        value={inputs.prenom|| ""} 
        onChange={handleChange}
      />
      </label>
      <br/><br/>
      <label>Age :
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br/><br/>
        <label>
        <PhoneInput
    placeholder="Enter phone number"
      value={inputs.telephone}
      onChange={handleChange}/>
      </label>
        <br/><br/>
        <label>Adresse mail :
      <input 
        type="text" 
        id = "email"
        name= "mail" 
        value={inputs.email|| ""} 
      />
      </label>
      <br/><br/>
        <input type="submit" onclick="validate()"/>
    </form>
  )
} export default Form