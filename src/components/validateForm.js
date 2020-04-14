import React from 'react';
import Form from './Form.js';
import Info from './Info.js'
​
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.renderData = this.renderData.bind(this);
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
      // isSubmitted: false,
      isValidated:false
    }
  }
​
  handleInputValue (inputName,inputValue) {
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
      },() => this.validateForm())///admite un callback que se ejecuta después que se setea el estado, 
                                  //aquí le paso una función que una vez que se ha seteado el estado
                                  //ejecutará validando que ninguno de los campos vaya vacío
​
    } 
  }
​
  validateForm(){
    //si una vez seteado el estado ninguno de los campos está vacío seteo a su vez mi booleano a true
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
    console.log(this.state.userInfo);
    return (
      <div className="App">
        <Form 
          fileInput={this.fileInput}
          name={this.state.userInfo.name}
          job={this.state.userInfo.job}
          phone={this.state.userInfo.phone}
          email={this.state.userInfo.email}
          linkedin={this.state.userInfo.linkedin}
          github={this.state.userInfo.github}
          // renderData = {this.renderData}
          handleInputValue = {this.handleInputValue}
          checked = {this.state.paletteChecked}
          // isValidated = {this.state.isValidated}
        />
        {/* {this.state.isSubmitted ?  */}
          <Info 
            colorPalette={this.state.paletteChecked}
            firstName={this.state.userInfo.name}
            lastName={this.state.userInfo.job}
          />
          {/* :
          'no hay datos'
        } */}
      </div>
    );
  }
}
​
export default App;