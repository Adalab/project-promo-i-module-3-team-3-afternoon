import React from 'react';
import Loader from '../images/loader-card.svg';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCardData = this.fetchCardData.bind(this);
      }
      fetchCardData = event => {
        if(this.props.isValidated === true){
            this.props.fetchCardData()
        } else {
            event.preventDefault();
        };
    };

    render() {
        console.log(this.props)
        return (
            <div className="containerShareBottom">
                <p id="error-message" className={`error-message ${this.props.isValidated === true ? 'hiddenMessage' : ''}`}>Completa los campos obligatorios*</p>
                {/*para activar o desactivar disabled por medio de JS lo inicializo como disabled=true, es decir mi botón ESTÁ DESACTIVADO cuando disabled es true
                como la primera vez que entro a mi app isValidated es false tengo que decirle a disabled lo contrario de lo que vale isValidated, es decir !this.props.isValidated
                así disabled será true, luego el valor se seteará con la validación
                en cuanto a la clase escribo el ternario para añadirle o no la clase buttonDisabled en función de si isValidated es true o false
                */}
                <button id="buttonValidation" className={`button buttonShare ${!this.props.isValidated ? 'buttonDisabled' : ''}`} type="button" disabled={!this.props.isValidated} onClick={this.props.validateForm} onClick={this.props.fetchCardData}>
                    <i className="iconSend far fa-address-card"></i>
                    <span className="textButton" >CREAR TARJETA</span>
                </button>
                <div className={`card-loader ${this.props.isLoading === true ? '' : ' hidden'}`}><img className="card-loader__image" alt="card-lo" src={Loader}></img></div>
                <div className={`card__share ${this.props.cardSuccess === true ? '' : ' hidden'}`} id="card-share">
                    <p id="card-link" className="p.card__link">La tarjeta ha sido creada:</p>
                    <a href={this.props.cardURL} target="_blank"><p className="card__link">{this.props.cardURL}</p></a>       
                    <a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20tan%20GUAY%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, Migración AwesomeProfileCards, promo Idelisa Equipo 3 ${this.props.cardURL}`} target="_blank" id="twitter-share" className="button-twitter"><i className="fab fa-twitter"></i>Compartir en Twitter</a>
                   
                </div>
            </div>    
           
        )
    }
}

export default Share;