import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Design from "./Design";
import FormFill from "./FormFill";
import Footer from "./Footer";
import Share from './Share';
import DefaultImage from "./DefaultImage";
// import {fetchCardData} from '../services/CardService';
import CollapseList from './CollapseList';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    //falta bindear por eso no funciona
    this.handleCollapse = this.handleCollapse.bind(this);
    this.state = {
      activePanel: ''
    }
  }

  handleCollapse(targetId) {
    console.log(targetId)
    this.setState({activePanel: targetId})
  }

  render() {
    return (
        <div className="wrapper">
          <Header image={logo} />
          <div className="cardWrapper">
            <Preview userName="Nombre Apellidos"
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
              <CollapseList handleCollapse={this.handleCollapse}
                            activePanel={this.state.activePanel}
              />
            </section>
          </div>
        <Footer image={logoAdalab} />
     </div>
    );
  }
}

export default CardMaker;
