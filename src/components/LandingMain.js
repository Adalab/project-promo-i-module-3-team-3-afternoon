import React from "react";

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
            <a className="main__icons-1" href="../cards.html#design">
              <i className="far fa-object-ungroup" aria-hidden="true"></i>
              <p className="main__text--icons">Diseña</p>
            </a>
            <a className="main__icons-2" href="../cards.html#fill">
              <i className="far fa-keyboard"></i>
              <p className="main__text--icons">Rellena</p>
            </a>
            <a className="main__icons-3" href="../cards.html#share">
              <i className="fas fa-share-alt" aria-hidden="true"></i>
              <p className="main__text--icons">Comparte</p>
            </a>
          </nav>
          <div className="main__button">
            <a className="main__button--a" href="../cards.html" title="comenzar">
              {" "}
              Comenzar
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingMain;
