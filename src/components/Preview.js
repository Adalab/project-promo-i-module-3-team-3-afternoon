import React from 'react';
// import defaultImage from 'DefaultImage';

const Preview = props => { 
            
            return (
                
              <section className="preview">
    <div className="card_container">

        <button id="reset" className="buttonReset"> <i className="far fa-trash-alt"></i> reset</button>

        <div className="card" id="cardid">
            <div className="headline">
                <h2 className="name" id="cardname">{props.userName === '' ? 'Nombre Apellido' : props.userName}</h2>
                <h3 className="role" id="cardrole">{props.position === '' ? 'Front-end developer' : props.position}</h3>
            </div>

            <div className = "inputImage" id="inputImage" >
            </div>

            <ul className="socialKit">

                <li className="list deactivate" id="btn-phone">
                    <a className="btn" id="phone">
                        <i className="fas fa-mobile-alt" id="icon"></i>
                    </a>
                </li>
                <li className="list deactivate" id="btn-email">
                    <a className="btn" id="email">
                        <i className="far fa-envelope" id="icon"></i>
                    </a>
                </li>
                <li className="list deactivate" id="btn-linkedin">
                    <a className="btn" id="linkedin" target="_blank">
                        <i className="fab fa-linkedin-in" id="icon"></i>
                    </a>
                </li>
                <li className="list deactivate" id="btn-github">
                    <a className="btn" id="github" target="_blank">
                        <i className="fab fa-github-alt" id="icon"></i>
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
        //   avatar: defaultImage
      }
      
      
        
        export default Preview;