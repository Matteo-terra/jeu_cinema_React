import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import '../styles/FormStyle.css';
import "@progress/kendo-theme-default/dist/all.css";

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

function MyForm() {
  const handleSubmit = (data) => {
    console.log(`
      Nom: ${data.name}
      Prénom: ${data.prenom}
      Email: ${data.email}
      Mot de Passe: ${data.password}
      Accepted Terms: ${data.acceptedTerms}

    `);

  }

  return (
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
            validator={[requiredValidator, emailValidator]} />
          
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

          <button disabled={!formRenderProps.allowSubmit}>
            Envoyer !
          </button>
        </form>
      )}>
    </Form>
  );
}export default MyForm
