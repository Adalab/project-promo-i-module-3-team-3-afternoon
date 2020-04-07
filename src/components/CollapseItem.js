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
        <div id={this.props.id} onClick={this.displayPanel} className={`containerFillInTop collapse-item ${this.props.activePanel === this.props.id ? "active" : ""}`}>
          <div className="subContainer">
              <div><i className="icon far fa-keyboard"></i></div>
              <p className="title">RELLENA</p>
              <div className="iconDirection" ><i className="iconDirection2 fas fa-chevron-down"></i></div>
          </div>
          <div className="containerFillInBottom">
          {this.props.children}
        </div>
      </div>
      
    );
  }
}

export default CollapseItem;