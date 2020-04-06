import React from 'react';

class CollapseItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayPanel = this.displayPanel.bind(this)
  }

  displayPanel(evt) {
    this.props.handleCollapse(evt.currentTarget.id)
  }

  render() {
    return (
        <div className="containerFillInTop">
        <div className="subContainer">
            <div><i className="icon far fa-keyboard"></i></div>
            <p className="title">RELLENA</p>
        </div>
        <div className="iconDirection" onClick={this.displayPanel}><i className="iconDirection2 fas fa-chevron-down"></i></div>
    
        <div className="containerFillInBottom" id={this.props.id}  className={`collapse-item ${this.props.activePanel === this.props.id ? "active" : ""}`}>
        {this.props.children}
      </div>
      </div>
      
    );
  }
}

export default CollapseItem;