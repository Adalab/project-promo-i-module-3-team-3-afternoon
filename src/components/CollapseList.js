import React from 'react';
import FormFill from './FormFill';
import CollapseItem from './CollapseItem';
import Design from './Design';
import Share from './Share'

const CollapseList = props => {

 

  return(
    <div className="left-column">
      <CollapseItem handleCollapse = {props.handleCollapse}
                    
                    activePanel = {props.activePanel}
                    id = 'collapse-1'
                    title = 'DISEÑA'
                    icon = 'far fa-object-ungroup'
      >
         <Design handleRadioChange = {props.handleRadioChange}
                  palette ={props.palette}
                  />
      </CollapseItem>
      <CollapseItem handleCollapse = {props.handleCollapse}
                    
                    activePanel = {props.activePanel}
                    id = 'collapse-2'
                    title = 'RELLENA'
                    icon = 'far fa-keyboard'
      >
        <FormFill nameTitle='Nombre completo'
                  requiredMessage='Completa los campos obligatorios*'
                  profession='Puesto'
                  email='Email'
                  phone='Teléfono'
                  linkedin='Linkedin'
                  github='Github'
                  // handleCollapse={props.handleCollapse} esta la quitamos el que recibe la prop es el colapsable no el formulario
                  activePanel={props.activePanel}
        />
      </CollapseItem>
      <CollapseItem handleCollapse = {props.handleCollapse}
                    activePanel = {props.activePanel}
                    id = 'collapse-3'
                    title = 'COMPARTE'
                    icon = 'fas fa-share-alt'
        >
          <Share />

      </CollapseItem>
    </div>
  )
}

export default CollapseList;