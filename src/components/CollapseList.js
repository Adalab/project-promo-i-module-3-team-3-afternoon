import React from "react";
import FormFill from "./FormFill";
import CollapseItem from "./CollapseItem";
import Design from "./Design";
import Share from "./Share";

const CollapseList = props => {
  return (
    <div className="left-column">
      <CollapseItem
        handleCollapse={props.handleCollapse}
        activePanel={props.activePanel}
        id="collapse-1"
        title="DISEÑA"
        icon="far fa-object-ungroup"
        darkMode={props.darkMode}
      >
        <Design
          handleRadioChange={props.handleRadioChange}
          palette={props.palette}
          darkMode={props.darkMode}
        />
      </CollapseItem>
      <CollapseItem
        handleCollapse={props.handleCollapse}
        activePanel={props.activePanel}
        id="collapse-2"
        title="RELLENA"
        icon="far fa-keyboard"
        darkMode={props.darkMode}
      >
        <FormFill
          handleInputValue={props.handleInputValue}
          avatar={props.avatar} 
          isAvatarDefault={props.isAvatarDefault} 
          updateAvatar={props.updateAvatar}
          userInfo={props.userInfo}
          darkMode={props.darkMode}
        />
      </CollapseItem>
      <CollapseItem
        handleCollapse={props.handleCollapse}
        activePanel={props.activePanel}
        id="collapse-3"
        title="COMPARTE"
        icon="fas fa-share-alt"
        darkMode={props.darkMode}
      >
        <Share 
        handleInputValue = {props.handleInputValue}  
        validateForm={props.validateForm}  
        isValidated={props.isValidated}
        cardURL={props.cardURL}
        fetchCardData={props.fetchCardData}
        cardSuccess={props.cardSuccess}
        isLoading={props.isLoading}
        darkMode={props.darkMode}
        />
      </CollapseItem>
    </div>
  );
};

export default CollapseList;
