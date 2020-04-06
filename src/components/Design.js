import React from 'react';
//import Collapsibles from './Collapsibles';

const Design = props => {
      return (

     // <Collapsibles
     
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
         //</Collapsibles>
      );
}
  
  //cambio de los <li> por <div className="palette">
  //cambio de <div className="containerDesignBottom"> por  <div className="color_selected">

export default Design;