import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Design from "./Design";
import FormFill from "./FormFill";
import Footer from "./Footer";
// import Share from './Share';
import DefaultImage from "./DefaultImage";
// import {fetchCardData} from '../services/CardService';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
        <div className="wrapper">
          <Header image={logo} />
          <div class="cardWrapper">
            <Preview
              // userName={userInfo.name}
              // position={userInfo.job}
              // paletteValue={userInfo.palette}
              // email={userInfo.email}
              // phone={userInfo.phone}
              // linkedin={userInfo.linkedin}
              // github={userInfo.github}
              // avatar={profile.avatar}
              // resetForm={this.resetForm}}

              userName="Nombre Apellidos"
              position="Front End Developer"
              paletteValue=""
              email="asdasd@dfs.com"
              phone="6666666"
              linkedin="{userInfo.linkedin}"
              github="{userInfo.github}"
              avatar="{profile.avatar} "
              resetForm="{this.resetForm}"
            />

            <section className="containerSectionStyles">
              <Design />
              <FormFill
                nameTitle="Nombre completo"
                requiredMessage="Completa los campos obligatorios*"
                profession="Puesto"
                email="Email"
                phone="Teléfono"
                linkedin="Linkedin"
                github="Github"
              />
            </section>
          </div>
        
        <Footer image={logoAdalab} />
     </div>
    );
  }
}

export default CardMaker;
