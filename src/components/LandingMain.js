import React from "react";
import { Link } from "react-router-dom";

class LandingMain extends React.Component {
  render() {
    return (
      <div className="landing__container">
        <header className="container_logo">
          <img
            className="logo"
            src={this.props.image}
            alt="logo"
            title="logo awesome profile-cards"
          />
        </header>
        <main className="main">
          <h1 className="main__title"> Crea tu tarjeta de visita </h1>
          <p className="main__content">
            Crea mejores contactos profesionales de
            <span>forma fácil y cómoda</span>{" "}
          </p>
          <nav className="main__icons">
            <Link className="main__icons-1" to="/Card" title="Diseña">
              <i className="far fa-object-ungroup" aria-hidden="true"></i>
              <p className="main__text--icons">Diseña</p>
            </Link>
            <Link className="main__icons-2" to="/Card" title="Diseña">
              <i className="far fa-keyboard"></i>
              <p className="main__text--icons">Rellena</p>
            </Link>
            <Link className="main__icons-3" to="/Card" title="Diseña">
              <i className="fas fa-share-alt" aria-hidden="true"></i>
              <p className="main__text--icons">Comparte</p>
            </Link>
          </nav>
          <div className="main__button">
            <Link className="link-button" to="/Card" title="comenzar">
              comenzar
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingMain;
