import React from 'react';


class LandingMain extends React.Component {
    render() {
 return (
 <div class="landing__container">
 <header class="container_logo">
     <img class="logo" src={this.props.image} alt="logo" title="logo awesome profile-cards">
 </header>

 <main class="main">
     <h1 class="main__title"> Crea tu tarjeta de visita </h1>
     <p class="main__content">
         Crea mejores contactos profesionales de
 
 
         <span>forma fácil y cómoda</span> </p>
     <nav class="main__icons">
         <a class="main__icons-1" href="../cards.html#design">
             <i class="far fa-object-ungroup" aria-hidden="true"></i>
             <p class="main__text--icons">Diseña</p>
         </a>
         <a class="main__icons-2" href="../cards.html#fill">
             <i class="far fa-keyboard"></i>
             <p class="main__text--icons">Rellena</p>
         </a>
         <a class="main__icons-3" href="../cards.html#share">
             <i class="fas fa-share-alt" aria-hidden="true"></i>
             <p class="main__text--icons">Comparte</p>
 
         </a>
     </nav>
     <div class="main__button">
         <a class="main__button--a" href="../cards.html" title="comenzar"> Comenzar
         </a>
     </div>
 </main>
 </div>);
    }

}


export default LandingMain;

