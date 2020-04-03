import React from 'react';
import logo from '../images/tarjetas-molonas.png';
import logoAdalab from '../images/logo-adalab.png';
import LandingMain from './LandingMain';
import Footer from './Footer';
import '../stylesheets/App.scss';
import CardMaker from './CardMaker';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        // <div className="landing">
        //   <LandingMain image={logo}
        //   />
        //   <Footer image={logoAdalab}
        //   />
        // </div>
        <div className="wrapper">
        
        <CardMaker
        />
      </div>

      );
    }
}


export default App;
