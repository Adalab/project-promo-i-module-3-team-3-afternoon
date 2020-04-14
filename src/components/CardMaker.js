import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Footer from "./Footer";
import defaultImage from "./DefaultImage";
// import {fetchCardData} from '../services/CardService';
import CollapseList from "./CollapseList";


class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    //falta bindear por eso no funciona
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.validateForm=this.validateForm(this);
   
    this.updateAvatar = this.updateAvatar.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      activePanel: "",
      palette: "palette1",
      userInfo: {
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: defaultImage
      },
      
      profile: {
        avatar: defaultImage
      },

      isAvatarDefault: true,
      isValidated:false,

    };
  }

  handleCollapse(targetId) {
    console.log(targetId);
    if (targetId !== this.state.activePanel) {
      this.setState({ activePanel: targetId });
    } else {
      this.setState({ activePanel: "" });
    }
  }

  handleRadioChange(target) {
    this.setState((prevState) => {
      return (prevState.palette = target.value);
    });
  }

  handleInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]: inputValue,
        },
      };
    }, ()=>this.validateForm());
    console.log(this.state.userInfo);
  }
  
  validateForm(){
    const { name, job, phone, email } = this.state.userInfo;
    const isValidated = (name.length > 0) && (job.length > 0) && (phone.length > 0) && (email.length > 0);
    this.setState({isValidated:isValidated})
  }

  updateAvatar(img) {
    const {profile} = this.state;
    this.setState(prevState => {
      let newProfile = {...profile, avatar: img};
      let newUserInfo = prevState.userInfo; 
      return {
        profile: newProfile,
        isAvatarDefault: false,
        validAvatar: true,
        userInfo: {...newUserInfo, photo: img}
      }
    });
  };

  resetForm(){
    this.setState({
        
        activePanel: "",
        palette: "palette1",
        userInfo: {
          name: "",
          job: "",
          phone: "",
          email: "",
          linkedin: "",
          github: "",
          photo: defaultImage
        },
        
        profile: {
          avatar: defaultImage
        },
  
        isAvatarDefault: true,
      
    })
}


  render() { 
    return (
      <div className="wrapper">
        <Header image={logo} />
        <div className="cardWrapper">
          <Preview
            userName={this.state.userInfo.name}
            position={this.state.userInfo.job}
            paletteValue=""
            email={this.state.userInfo.email}
            phone={this.state.userInfo.phone}
            linkedin={this.state.userInfo.linkedin}
            github={this.state.userInfo.github}
            avatar={this.state.profile.avatar}
            resetForm={this.resetForm}
            palette={this.state.palette}
          />
          <section className="containerSectionStyles">
            <CollapseList
              handleCollapse={this.handleCollapse}
              activePanel={this.state.activePanel}
              handleRadioChange={this.handleRadioChange}
              handleInputValue={this.handleInputValue}
              palette={this.state.palette}
              avatar={this.state.profile.avatar} 
              isAvatarDefault={this.state.isAvatarDefault} 
              updateAvatar={this.updateAvatar} 
              handleInputValue = {this.handleInputValue}
              validateForm = {this.validateForm}
              isValidated = {this.state.isValidated}
            />
          </section>
        </div>
        <Footer image={logoAdalab} />
      </div>
    );
  }
}

export default CardMaker;
