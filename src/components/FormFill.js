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
          value={props.userInfo.name}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
          
        />
        <FormInput
          section="professionCard"
          id="profession-input"
          labelName="Puesto"
          className="profession-input"
          placeholder=" Ej: Front-end Developer"
          type="text"
          name="job"
          value={props.userInfo.job}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
        
        />

        <div className="addImage">
          <GetAvatar
           avatar={props.avatar} 
           isAvatarDefault={props.isAvatarDefault} 
           updateAvatar={props.updateAvatar} 
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
          value={props.userInfo.email}
          requiredMessage="Completa los campos obligatorios*"
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
        
        />

        <FormInput
          section="phoneCard"
          id="phone-input"
          labelName="Teléfono"
          className="phone-input"
          placeholder=" Ej: 670 777 444"
          type="tel"
          name="phone"
          value={props.userInfo.phone}
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
         
        />
        <FormInput
          section="linkedinCard"
          id="linkedin-input"
          labelName="Linkedin"
          className="linkedin-input"
          placeholder=" Ej: linkedin.com/in/Idelisa.Bonnelly"
          type="text"
          name="linkedin"
          value={props.userInfo.linkedin}
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
    
        />

        <FormInput
          section="githubCard"
          id="github-input"
          labelName="Github"
          className="github-input"
          placeholder=" Ej: Idelisa-Bonnelly"
          type="text"
          name="github"
          value={props.userInfo.github}
          handleInputValue={props.handleInputValue}
          darkMode = {props.darkMode}
         
         
        />
      </form>
    </div>
  );
};

export default FormFill;
