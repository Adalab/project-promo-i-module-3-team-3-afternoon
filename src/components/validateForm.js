import React from 'react';
import Form from './Form.js';
import Info from './Info.js'
​
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.fileInput = React.createRef();
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      userInfo: {
        palette:'',
        name:'',
        job:'',
        phone:'',
        email:'',
        linkedin:'',
        github:''
      },
      paletteChecked:'',
      isValidated:false
    }
  }
​ handleInputValue (inputName,inputValue) {
    this.setState(prevState => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]:inputValue
        }
      }
    })
    if(inputName === "palette") {
      this.setState({
        paletteChecked:inputValue
      },() => this.validateForm())
    } 
  }
​
  validateForm(){
    const { firstName, lastName, gender, age } = this.state.form;
    const isValidated = firstName.length > 0 && lastName.length > 0 && age.length > 0 && gender.length > 0;
    this.setState({isValidated:isValidated})
    if (!isValidated){
      alert('faltan campos');
    }
  }
​
  printData(){
      this.setState(prevState => ({
        isSubmitted:!prevState.isSubmitted,
      }))
  }
​
  render() {
    const {userInfo, paletteChecked, isValidated } = this.state;
    console.log(this.state.userInfo);
    return (
      <div className="App">
        <Form 
          fileInput={this.fileInput}
          name={userInfo.name}
          job={userInfo.job}
          phone={userInfo.phone}
          email={userInfo.email}
          linkedin={userInfo.linkedin}
          github={userInfo.github}
          handleInputValue = {this.handleInputValue}
          checked = {paletteChecked}
        />
        {}
          <Info 
            colorPalette={paletteChecked}
            firstName={userInfo.name}
            lastName={userInfo.job}
          />
          {}
      </div>
    );
  }
}
​
export default App;