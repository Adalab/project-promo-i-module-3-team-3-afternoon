import React from 'react';
import Header from './Header';
import logo from '../images/tarjetas-molonas.png';
import logoAdalab from '../images/logo-adalab.png';
import Preview from './Preview';
// import Design from './Design';
import FormFill from './FormFill';
import Footer from './Footer';
// import Share from './Share';
// import DefaultImage from './DefaultImage';
// import {fetchCardData} from '../services/CardService';
import image from '../images/queen.gif';
import CollapseList from './CollapseList'



class CardMaker extends React.Component {
    constructor(props) {
        super(props);
        this.handleCollapse = this.handleCollapse.bind(this)
    this.state = {
      activePanel: ''
        
    }
}

    handleCollapse(targetId) {
        this.setState({activePanel: targetId})
      }

    

    render() {
              return (
            // <main className="main">
                <div>
                     <Header image={logo}
                     />
            <Preview
                     // userName={userInfo.name}
                    // position={userInfo.job}
                    // paletteValue={userInfo.palette}
                    // email={userInfo.email}
                    // phone={userInfo.phone}
                    // linkedin={userInfo.linkedin}
                    // github={userInfo.github}
                    // avatar={profile.avatar} 
                    // resetForm={this.resetForm}}

                    userName='Nombre Apellidos'
                    position='Front End Developer'
                    paletteValue=''
                    email='asdasd@dfs.com'
                    phone='6666666'
                    linkedin='{userInfo.linkedin}'
                    github='{userInfo.github}'
                    avatar='{profile.avatar} '
                    resetForm='{this.resetForm}'
                /> 
                {/* </main>  */}
              
                <CollapseList handleCollapse={this.handleCollapse}
                              activePanel={this.state.activePanel}
                />
                <Footer image={logoAdalab}
         />
        
                </div>
              
                )
                }
                }


export default CardMaker;