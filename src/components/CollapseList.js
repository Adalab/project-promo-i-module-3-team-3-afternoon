import React from 'react';
import FormFill from './FormFill';
import CollapseItem from './CollapseItem';

const CollapseList = props => {
  return(
    <div className="left-column">
      <CollapseItem handleCollapse = {props.handleCollapse}
                    activePanel = {props.activePanel}
                    id = 'collapse-1'
                    title = 'DISEÑA'
      >
        {/*AQUÍ LOS SELECTORES para comprobar que el colapsable funciona he metido texto de relleno, podeis quitar el p*/}
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        </p>
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
        >
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        </p>
        {/*AQUÍ EL COMPONENTE DE SHARE BUTTON para comprobar que el colapsable funciona he metido texto de relleno, podeis quitar el p*/}

      </CollapseItem>
    </div>
  )
}

export default CollapseList;