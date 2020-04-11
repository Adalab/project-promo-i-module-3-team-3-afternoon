import React from "react";
import FormInput from './FormInput';
import GetAvatar from './GetAvatar';

const FormFill = props => {
  return (
    <div className="containerFillInBottom" id="form-container">
      <form id="formContainer">
        <FormInput
          section="nameCard"
          id="name-input"
          labelName="Nombre completo"
          className="name-input"
          placeholder=" Ej: Idelisa Bonnelly"
          type="text"
          name="name"
          value={props.name}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          handleReset={props.handleReset}
        />
        <FormInput
          section="professionCard"
          id="profession-input"
          labelName="Puesto"
          className="profession-input"
          placeholder=" Ej: Front-end Developer"
          type="text"
          name="job"
          value={props.job}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          handleReset={props.handleReset}
        />

        <div className="addImage">
          <GetAvatar
           avatar={props.avatar} 
           isAvatarDefault={props.isAvatarDefault} 
           updateAvatar={props.updateAvatar} 
           handleReset={props.handleReset}
           />

        </div>

        <FormInput
          section="emailCard"
          id="email-input"
          labelName="Email"
          className="email-input"
          placeholder=" Ej: IdelisaBonnelly@gmail.com "
          type="email"
          name="email"
          value={props.email}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          handleReset={props.handleReset}
        />

        <FormInput
          section="phoneCard"
          id="phone-input"
          labelName="Teléfono"
          className="phone-input"
          placeholder=" Ej: 670 777 444"
          type="tel"
          name="phone"
          value={props.phone}
          handleInputValue={props.handleInputValue}
          handleReset={props.handleReset}
        />
        <FormInput
          section="linkedinCard"
          id="linkedin-input"
          labelName="Linkedin"
          className="linkedin-input"
          placeholder=" Ej: linkedin.com/in/Idelisa.Bonnelly"
          type="text"
          name="linkedin"
          value={props.linkedin}
          handleInputValue={props.handleInputValue}
          handleReset={props.handleReset}
        />

        <FormInput
          section="githubCard"
          id="github-input"
          labelName="Github"
          className="github-input"
          placeholder=" Ej: Idelisa-Bonnelly"
          type="text"
          name="github"
          value={props.github}
          handleInputValue={props.handleInputValue}
        />
      </form>
    </div>
  );
};

export default FormFill;
