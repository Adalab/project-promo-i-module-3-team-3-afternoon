import React, { Component } from 'react';

class GetAvatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="containerAdd action">
                <button className="button buttonImage action__upload-btn js__profile-trigger" type="button" id="image-input">Añadir Imagen</button>
                <input type="file" name="" id="img-selector" className="action__hiddenField js__profile-upload-btn" hidden="hidden"/>
                <div className="search" id="js__profile-preview"></div>
            </div>
        );
    }
}


export default GetAvatar;