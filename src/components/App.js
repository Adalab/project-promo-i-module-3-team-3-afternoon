import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="landing">
              <LandingMain image={logo} />
              <Footer image={logoAdalab}/>
            </div>
          </Route>
          <Route exact path="/Card">
            <CardMaker/>
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;

