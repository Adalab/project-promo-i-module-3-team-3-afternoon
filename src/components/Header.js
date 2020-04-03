import React from 'react';
import logo from '../images/logo.svg';

class headerCards extends React.Component {
    render() {
        return (
            <header className="container_logoCards">
                <a href="https://adalab.es/" alt="logo javasqueen" title="logo javasqueen">
                    <img className="logoCards" src={logo} alt="logo" title="logo awesome profile-cards" />
                </a>
            </header>
        )
    }
}

export default headerCards;