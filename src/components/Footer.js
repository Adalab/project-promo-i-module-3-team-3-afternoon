import React from 'react';


class Footer extends React.Component {
    render() {
    return (
    <footer>
        <div className="footer-wrapper">
            <small className="copyright"><span class="first-letter">a</span>wesome profile-cards &copy;2020</small>
            <div className="img-container">
                <a href="https://adalab.es/"><img title="Logo de AdaLab" alt="Logo de AdaLab" src={this.props.image}/></a>
            </div>
        </div>
    </footer> 
  
     )};

}

export default Footer;



  