import React from "react";
import Header from "./Header";
import logo from "../images/tarjetas-molonas.png";
import logoAdalab from "../images/logo-adalab.png";
import Preview from "./Preview";
import Footer from "./Footer";
import defaultImage from "./DefaultImage";
import CollapseList from "./CollapseList";
import {fetchCardData} from '../services/CardFetch';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.fetchCardData = this.fetchCardData.bind(this);
    this.setURL = this.setURL.bind(this);
    this.setDarkMode = this.setDarkMode.bind(this);
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
      isValidated:false,
      cardURL: '',
      isLoading: false,
      cardSuccess: '',
      darkMode: false
    };
  }

  handleCollapse(targetId) {
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
    },() => this.validateForm());
  }
  
  validateForm(){
    const { name, job, phone, email,linkedin,github } = this.state.userInfo;
    const isValidatedValue = (name.length > 0) && (job.length > 0) && (phone.length > 0) && (email.length > 0) && (linkedin.length > 0) && (github.length > 0);
    this.setState({isValidated:isValidatedValue})
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
    this.setState ({
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
      isValidated: false    
    })
  }
  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('data'));
    if(data !== null){
      this.setState({
        userInfo: {
          "palette": data.palette !=='' ? data.palette : '1',
          "name": data.name,
          "job": data.job,
          "phone": data.phone,
          "email": data.email,
          "linkedin": data.linkedin,
          "github": data.github,
          "photo": data.photo !== '' ? data.photo : defaultImage
        },
        profile: {
          avatar: data.photo
        },
        isAvatarDefault: data.photo !== defaultImage ? false : true,
        cardURL: '',
      })
    } 
    if(data !== null){
      if((data.name.length > 0) && (data.job.length > 0) && (data.phone.length > 0) && (data.email.length > 0) && (data.linkedin.length > 0) && (data.github.length > 0)) {
        this.setState({isValidated: true})
      }
    }
  }

  componentDidUpdate(){
    localStorage.setItem('data', JSON.stringify(this.state.userInfo));
  }

  fetchCardData(){
    const json = JSON.parse(localStorage.getItem('data'));
    fetchCardData(json)
    .then(result => this.setURL(result))
    .catch(error => console.log(error));
    this.setState({
      isLoading: true
    })
  }

  setURL(result){
    if(result.success){
      this.setState({
        cardURL: result.cardURL,
        isLoading: false,
        cardSuccess: true
      })
    } else {
        this.setState({
          cardURL: 'ERROR:' + result.error,
          isLoading: false
        })
    }
  }

setDarkMode() {
  {this.setState((prevState) => {
    return {
      darkMode: !prevState.darkMode

}})}
}

  render() { 
    const {activePanel, userInfo, profile, isAvatarDefault, isValidated, cardURL, isLoading, cardSuccess} = this.state;
    return (
      <div className="wrapper">
        <Header image={logo} darkMode={this.state.darkMode}/>
        <div className={`cardWrapper ${this.state.darkMode === true ? "dark" : "light"}`}>
          <Preview
            userName={userInfo.name}
            position={userInfo.job}
            paletteValue=""
            email={userInfo.email}
            phone={userInfo.phone}
            linkedin={userInfo.linkedin}
            github={userInfo.github}
            avatar={profile.avatar}
            resetForm={this.resetForm}
            setDarkMode={this.setDarkMode}
            darkMode={this.state.darkMode}
            palette={userInfo.palette}
          />
          <section className="containerSectionStyles">
            <CollapseList
              handleCollapse={this.handleCollapse}
              activePanel={activePanel}
              handleRadioChange={this.handleRadioChange}
              handleInputValue={this.handleInputValue}
              palette={userInfo.palette}
              avatar={profile.avatar} 
              isAvatarDefault={isAvatarDefault} 
              updateAvatar={this.updateAvatar} 
              handleInputValue = {this.handleInputValue}
              validateForm = {this.validateForm}
              isValidated = {isValidated}
              cardURL={cardURL}
              fetchCardData={this.fetchCardData}
              cardSuccess={cardSuccess}
              isLoading={isLoading}
              userInfo={userInfo}
            />
          </section>
        </div>
        <Footer image={logoAdalab}/>
      </div>
    );
  }
}

export default CardMaker;