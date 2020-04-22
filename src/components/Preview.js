import React from 'react';
import defaultImage from './DefaultImage';

const Preview = props => { 
            
            return (
                
              <section className="preview">
    <div className="card_container">
        <div className="button-container">
        <button id="reset" className="buttonReset" onClick={props.resetForm}> <i className="far fa-trash-alt"></i> reset</button>
        <button id="nigth-mode" className="nightMode" onClick={props.setDarkMode}> <i className="fas fa-moon"></i> dark mode</button>
        </div>

        <div className="card" id="cardid" >
            <div className={`headline ${props.palette}`}>
                <h2 className="name" id="cardname">{props.userName === '' ? 'Nombre Apellido' : props.userName}</h2>
                <h3 className="role" id="cardrole">{props.position === '' ? 'Front-end developer' : props.position}</h3>
            </div>

            <div className = "inputImage" id="inputImage"style={{backgroundImage:`url(${props.avatar})`}}></div>

            <ul className="socialKit">

                <li className="list" id="btn-phone">
                    <a className="btn" id="phone" >
                        <i className={`fas fa-mobile-alt ${props.phone === '' ? "deactivate" : "activate"}`} id="icon"></i>
                    </a>
                </li>
                <li className="list" id="btn-email">
                    <a className="btn" id="email">
                        <i className={`far fa-envelope ${props.email === '' ? "deactivate" : "activate"}`} id="icon"></i>
                    </a>
                </li>
                <li className="list" id="btn-linkedin">
                    <a className="btn" id="linkedin" target="_blank">
                        <i className={`fab fa-linkedin-in ${props.linkedin === '' ? "deactivate" : "activate"}`} id="icon"></i>
                    </a>
                </li>
                <li className="list" id="btn-github">
                    <a className="btn" id="github" target="_blank">
                        <i className={`fab fa-github-alt ${props.github === '' ? "deactivate" : "activate"}`} id="icon"></i>
                    </a>
                </li>
            </ul>

        </div>
    </div>
</section>

            );
          }
          
        Preview.defaultProps = {
          userName: 'Nombre Apellido',
          position: 'Front-End Developer',
          paletteValue: '1',
          avatar: defaultImage
      }
        
        export default Preview;