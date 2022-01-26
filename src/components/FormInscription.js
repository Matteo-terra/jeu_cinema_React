import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import '../styles/FormStyle.css';
import "@progress/kendo-theme-default/dist/all.css";
import {Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useHistory,
  Navigate,
  Outlet,

} from "react-router-dom";

import { inscrits } from "../data/InscritsData";

// import countries from "./countries";

const CustomInput = ({ fieldType, ...others }) => {
  return (
    <div>
      <Input
        type={fieldType}
        {...others} />
      <ValidationMessage {...others} />
    </div>
  );
};

const CustomDropDown = ({ options, ...others }) => {
  return (
    <div>
      <DropDownList
        data={options}
        {...others} />
      <ValidationMessage {...others} />
    </div>
  )
}

const CustomCheckbox = ({ ...props }) => {
  return (
    <div>
      <Checkbox {...props} />
      <ValidationMessage {...props} />
    </div>
  );
};

const ValidationMessage = ({ valid, visited, validationMessage }) => {
  return (
    <>
    { !valid && visited &&
        (<div className="required">{validationMessage}</div>)}
    </>
  );
}

const emailValidator = (value) => (
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Entrez une adresse mail valide."
);
const requiredValidator = (value) => {
  return value ? "" : "Ce champ est requis ! ";
}

const checkListMail = (value) => {
  if (inscrits.includes(value)){
    return "Adresse mail déjà existante"
  };
    }
  
    const telValidator = (value) => (
      new RegExp(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/).test(value) ? "" : "Entrez un numéro de téléphone valide."
    );


function MyForm() {

    const navigate = useNavigate();
  
  const handleSubmit = (data) => {
    var name = data.name
    var prenom = data.prenom
    var email = data.email
    var tel = data.tel
    var password = data.password
    var acceptedTerms = data.acceptedTerms

    localStorage.setItem("name", name)
    localStorage.setItem("prenom", prenom)
    localStorage.setItem("email", email)
   
    console.log(`
      Nom: ${name}
      Prénom: ${prenom}
      Email: ${email}
      Téléphone: ${tel}
      Mot de Passe: ${password}
      Accepted Terms: ${acceptedTerms}
    `);
    
    navigate('/quizz');
  }




  return (
    <div className="forminscri">
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit}>
          <h1>Inscrivez-vous !</h1>

          <Field
            label="Nom"
            name="name"
            fieldType="text"
            component={CustomInput}
            validator={requiredValidator} />

          <Field
            label="Prénom"
            name="prenom"
            fieldType="text"
            component={CustomInput}
            validator={requiredValidator} />

          <Field
            label="Email"
            name="email"
            fieldType="email"
            component={CustomInput}
            validator={[requiredValidator, emailValidator, checkListMail]} />

          <Field
            label="Téléphone"
            name="tel"
            fieldType="tel"
            component={CustomInput}
            validator={[requiredValidator, telValidator]} />
          
          <Field
            label="Mot de Passe"
            name="password"
            fieldType="password"
            component={CustomInput}
            validator={requiredValidator} />
          
          <Field
            label="J'accepte le CGU"
            name="acceptedTerms"
            type="checkbox"
            component={CustomCheckbox}
            validator={requiredValidator} />

          <button disabled={!formRenderProps.allowSubmit} >
            Envoyer ! 
          </button>
        </form>
      )}>
    </Form>
    </div>
  );
}export default MyForm
