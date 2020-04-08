import React from 'react';


//aquí os recomiendo que useis o funciones o clases, si no vais a usar estado es más cómodo que utiliceis componentes funcionales
const CollapseItem = (props) => {

  const displayPanel = (evt) => {
    props.handleCollapse(evt.currentTarget.id)
  }

  const handleChangeArrow =(evt) =>{
    props.changeArrow(evt.currentTarget.className)
  }

    return (
        <div id={props.id} 
             onClick={displayPanel, handleChangeArrow} 
             className={`containerFillInTop collapse-item ${props.activePanel === props.id ? "active" : ""}`}>
          <header className="subContainer">
            <span>
              <i className={`icon ${props.icon}`}></i>
              <span className="title">{props.title}</span>
            </span>
              <i className="iconDirection2 fas fa-chevron-down"></i>
          </header>
          <div className="containerFillInBottom">
            {props.children}
          </div>
      </div>
      
    );
}

export default CollapseItem;