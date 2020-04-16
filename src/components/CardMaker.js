import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Footer from "./Footer";
import defaultImage from "./DefaultImage";
import CollapseList from "./CollapseList";
import {fethCard} from '../services/CardService'


class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.showURL = this.showURL.bind(this);
    this.state = {
      activePanel: "",
      
      userInfo: {
        palette: "palette1",
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

    };
  }

   

  sendRequest(json){
    
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function(resp) { return resp.json(); })
      .then(function(result) { this.showURL(result); })
      .catch(function(error) { console.log(error); });
}


 showURL(result){
  // if(result.success){
  //   responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  //   twitterShare(result.cardURL);
  // }else{
  //   responseURL.innerHTML = 'ERROR:' + result.error;
  // }
  if(result.success){
    alert('ok')
  }else{
    alert('error')
  }
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
      return (prevState.userInfo.palette = target.value);
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
    });
    console.log(this.state.userInfo);
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
        
        // activePanel: "",
        
        userInfo: {
          palette: "palette1",
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
            palette={this.state.userInfo.palette}
          />
          <section className="containerSectionStyles">
            <CollapseList
              handleCollapse={this.handleCollapse}
              activePanel={this.state.activePanel}
              handleRadioChange={this.handleRadioChange}
              handleInputValue={this.handleInputValue}
              palette={this.state.userInfo.palette}
              avatar={this.state.profile.avatar} 
              isAvatarDefault={this.state.isAvatarDefault} 
              updateAvatar={this.updateAvatar} 
              sendRequest={this.sendRequest}
              userInfo={this.state.userInfo}
            />
          </section>
        </div>
        <Footer image={logoAdalab} />
      </div>
    );
  }
}

export default CardMaker;
