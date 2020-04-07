import React from 'react';
import FormFill from './FormFill';
import CollapseItem from './CollapseItem';

const CollapseList = props => {
  return(
    <div>
      <CollapseItem handleCollapse = {props.handleCollapse}
                      activePanel = {props.activePanel}
                      id = 'collapse-1'
                      title = 'DISEÑA'
        >
        {/*radio selector component */}

      </CollapseItem>
      <CollapseItem handleCollapse = {props.handleCollapse}
                      activePanel = {props.activePanel}
                      id = 'collapse-2'
                      title = 'RELLENA'
                      icon = 'far fa-keyboard'
        >
                <FormFill 
                nameTitle='Nombre completo'
                requiredMessage='Completa los campos obligatorios*'
                profession='Puesto'
                email='Email'
                phone='Teléfono'
                linkedin='Linkedin'
                github='Github'
                handleCollapse={props.handleCollapse} 
                activePanel={props.activePanel}
                />
      </CollapseItem>
      <CollapseItem handleCollapse = {props.handleCollapse}
                      activePanel = {props.activePanel}
                      id = 'collapse-3'
                      title = 'COMPARTE'
        >

        {/*share button */}

      </CollapseItem>
    </div>
  )


}

export default CollapseList;