import React from 'react';
import Preview from './Preview';
// import Design from './Design';
import Fill from './FormFill';
// import Share from './Share';
import defaultImage from '../images/queen.gif';
// import {fetchCardData} from '../services/CardService';
import '../stylesheets/App.scss';


class CardMaker extends React.Component {
    constructor(props) {
        super(props);
    }
    //body//
}

resetForm(){
    this.setState({
        open: 'design',
        userInfo: {
            "palette": '1',
            "name": '',
            "job": '',
            "phone": '',
            "email": '',
            "linkedin": '',
            "github": '',
            "photo": defaultImage
        },
        isAvatarDefault: true,
        profile: {
          avatar: defaultImage
        },
        validUserName: '',
        validPosition: '',
        validAvatar: '',
        validEmail: '',
        validLinkedin: '',
        validGithub: '',
        isFormValid:''
    })
}

export default CardMaker;