import React from 'react';
import logo from '../images/tarjetas-molonas.png';
import LandingMain from './LandingMain';
import Footer from './Footer';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <div className="Landing-main">
          <LandingMain image={logo}
          />
          <Footer
          />
        </div>
      );
    }
}


export default App;
