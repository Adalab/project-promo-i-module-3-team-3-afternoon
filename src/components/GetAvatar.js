import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetAvatar extends Component {
    constructor(props) {
        super(props);
    
        this.fr = new FileReader();
        this.myFileField = React.createRef();
        
        this.handleFilePicker = this.handleFilePicker.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.getImage = this.getImage.bind(this);
      }
    
      handleFilePicker() {
        this.myFileField.current.click(); 
      }
    
      uploadImage(e){
        const myFile = e.currentTarget.files[0];
        this.fr.addEventListener('load', this.getImage);
        this.fr.readAsDataURL(myFile);
      }
    
      getImage() {
        const image = this.fr.result;
        this.props.updateAvatar(image);
      }
    
      getPreview(isDefault, image) {
        return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
      }

    render() {
        const {isAvatarDefault, avatar} = this.props;
        return (
            <div className="containerAdd action">

                <button className="button buttonImage action__upload-btn js__profile-trigger" type="button" id="image-input" onClick={this.handleFilePicker}>Añadir Imagen</button>
                <input type="file" ref={this.myFileField} name="" id="img-selector" className="action__hiddenField js__profile-upload-btn" hidden="hidden" onChange={this.uploadImage}/>

                <div className="search" id="js__profile-preview" style={this.getPreview(isAvatarDefault, avatar)}>
                </div>

            </div>
        );
    }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};


export default GetAvatar;