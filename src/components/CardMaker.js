import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Footer from "./Footer";
import DefaultImage from "./DefaultImage";
// import {fetchCardData} from '../services/CardService';
import CollapseList from './CollapseList';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    //falta bindear por eso no funciona
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.state = {
      activePanel: '',
      palette:''
    }
  }

  handleCollapse(targetId) {
    console.log(targetId)
    if (targetId !== this.state.activePanel){
      this.setState({activePanel:targetId})
    } else{
      this.setState({activePanel:''})
    }
  }


  handleRadioChange(target){
    this.setState(prevState => {
      return prevState.palette= target.value
    });
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
                            handleRadioChange={this.handleRadioChange}
                            palette ={this.state.palette}
              />
            </section>
          </div>
        <Footer image={logoAdalab} />
     </div>
    );
  }
}

export default CardMaker;
