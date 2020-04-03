import React from 'react';
import Preview from './Preview';
// import Design from './Design';
// import Fill from './Fill';
// import Share from './Share';
import DefaultImage from './DefaultImage';
// import {fetchCardData} from '../services/CardService';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
              return (
            <main className="main">

    <Preview
                    // userName={userInfo.name}
                    // position={userInfo.job}
                    // paletteValue={userInfo.palette}
                    // email={userInfo.email}
                    // phone={userInfo.phone}
                    // linkedin={userInfo.linkedin}
                    // github={userInfo.github}
                    // avatar={profile.avatar} 
                    // resetForm={this.resetForm}

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
                </main>
                )
                }
                }


export default CardMaker;