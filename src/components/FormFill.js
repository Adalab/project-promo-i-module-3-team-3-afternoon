import React from 'react';
//import Collapsibles from './Collapsibles';
import GetAvatar from './GetAvatar';

const FormFill = props => {
    return (
        //<Collapsibles>
      
            <div className="containerFillInBottom" id="form-container">
                <form id="formContainer">
                    <div className="nameCard">
                        <label className="name" htmlFor="name">{props.nameTitle}<span className="inputRequired">*</span></label>
                        <input className="name-input" placeholder=" Ej: Idelisa Bonnelly" type="text" name="name" id="name-input"
                        required/>
                        <p className="input-error-message hiddenInputMessage">{props.requiredMessage}</p>
                    </div>
                    <div className="professionCard">
                        <label className="profession" htmlFor="profession">{props.profession}<span className="inputRequired">*</span></label>
                        <input className="profession-input" placeholder=" Ej: Front-end Developer" type="text" name="profession"
                        id="job-input" required/>
                        <p className="input-error-message hiddenInputMessage">{props.requiredMessage}</p>
                    </div>       
                    <div className="addImage">
                        <GetAvatar/>
                    </div>
                    <div className="emailCard">
                        <label className="email" htmlFor="email">{props.email}<span className="inputRequired">*</span></label>
                        <input className="email-input" placeholder=" Ej: IdelisaBonnelly@gmail.com " type="email" name="email"
                        id="email-input" required/>
                        <p className="input-error-message hiddenInputMessage">{props.requiredMessage}</p>
                    </div>
                    <div className="phoneCard">
                        <label className="phone" htmlFor="phone">{props.phone}</label>
                        <input className="phone-input" placeholder=" Ej: 670 777 444" type="tel" name="phone" id="phone-input"/>
                    </div>
                    <div className="linkedinCard">
                        <label className="linkedin" htmlFor="linkedin">{props.linkedin}</label>
                        <input className="linkedin-input" placeholder=" Ej: linkedin.com/in/Idelisa.Bonnelly" type="text"
                        name="linkedin" id="linkedin-input"/>
                    </div>
                    <div className="githubCard">
                        <label className="github" htmlFor="github">{props.github}</label>
                        <input className="github-input" placeholder=" Ej: Idelisa-Bonnelly" type="text" name="github"
                        id="github-input"/>
                    </div>
                </form>
            </div>
           
        // </Collapsibles>   
    )
}


export default FormFill;