import React from 'react';

class Item extends React.Component {
    render() {
      return (

      //  <Collapsibles
      //      collapseSection={props.collapseSection}
      //      open={props.open}
     //
     //     category="design"
     //       lowerSection="subContainer"
     //       sectionTitle="diseña"
     //       icon="far fa-object-ungroup"
     //   ></Collapsibles>

     <div className="color_selected">
     <p className="title special">COLORES</p>
     
            <div className="palette">
             <input className="check" id="colorOne" type="radio" value="colorsCard" name="colorCard" palette="palette1"
                 checked />
             <label className="colorPalette">
                 <div className="palette containerColorPalette1"></div>
                 <div className="palette containerColorPalette2"></div>
                 <div className="palette containerColorPalette3"></div>
             </label>
            </div>
            <div className="palette">
             <input className="check" id="colorTwo" type="radio" value="colorsCard" name="colorCard" />
             <label className="colorPalette">
                 <div className="palette containerColorPalette4"></div>
                 <div className="palette containerColorPalette5"></div>
                 <div className="palette containerColorPalette6"></div>
             </label>
             </div>
             <div className="palette">
             <input className="check" id="color3" type="radio" value="colorsCard" name="colorCard" />
             <label className="colorPalette">
                 <div className="palette containerColorPalette7"></div>
                 <div className="palette containerColorPalette8"></div>
                 <div className="palette containerColorPalette9"></div>
             </label>
         </div>
 </div>
  
  //cambio de los <li> por <div className="palette">
  //cambio de <div className="containerDesignBottom"> por  <div className="color_selected">








export default Design;