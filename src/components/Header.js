import React from 'react';
import logo from '../images/tarjetas-molonas.png';

class Header extends React.Component {
    render() {
        return (
            <header className={`container_logoCards ${this.props.darkMode === true ? "dark" : "light"}`}>
                <a href="https://adalab.es/" alt="logo javasqueen" title="logo javasqueen">
                    <img className="logoCards" src={logo} alt="logo" title="logo awesome profile-cards" />
                </a>
            </header>
        )
    }
}

export default Header;