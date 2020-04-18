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
    }, ()=>this.validateForm());
    console.log(this.state.userInfo);
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
    this.setState({
        
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
    if  ((data.name.length > 0) && (data.job.length > 0) && (data.phone.length > 0) && (data.email.length > 0) && (data.linkedin.length > 0) && (data.github.length > 0)) {
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
              handleInputValue = {this.handleInputValue}
              validateForm = {this.validateForm}
              isValidated = {this.state.isValidated}
              cardURL={this.state.cardURL}
              fetchCardData={this.fetchCardData}
              cardSuccess={this.state.cardSuccess}
              isLoading={this.state.isLoading}
              userInfo={this.state.userInfo}
            />
          </section>
        </div>
        <Footer image={logoAdalab}/>
      </div>
    );
  }
}

export default CardMaker;
