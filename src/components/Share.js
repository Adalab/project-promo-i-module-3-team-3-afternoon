import React from 'react';

class Share extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        console.log(this.props)
        return (
            <div className="containerShareBottom">
                <p id="error-message" className="hiddenMessage">{this.props.requiredMessage}</p>
                {/*para activar o desactivar disabled por medio de JS lo inicializo como disabled=true, es decir mi botón ESTÁ DESACTIVADO cuando disabled es true
                como la primera vez que entro a mi app isValidated es false tengo que decirle a disabled lo contrario de lo que vale isValidated, es decir !this.props.isValidated
                así disabled será true, luego el valor se seteará con la validación
                en cuanto a la clase escribo el ternario para añadirle o no la clase buttonDisabled en función de si isValidated es true o false
                */}
                <button id="buttonValidation" className={`button buttonShare ${!this.props.isValidated ? 'buttonDisabled' : ''}`} type="button" disabled={!this.props.isValidated} onClick={this.props.validateForm}>
                    <i className="iconSend far fa-address-card"></i>
                    <span className="textButton" >CREAR TARJETA</span>
                </button>
                <div className="card__share hidden" id="card-share">
                    <p>La tarjeta ha sido creada:</p>
                    <p id="card-link" className="card__link">card link</p>
                    <a id="twitter-share" href="" target="_blank">
                        <div className="btn-twitter"><i className="fab fa-twitter"></i>Compartir en twitter</div>
                    </a>
                </div>
            </div>    
           
        )
    }
}

export default Share;