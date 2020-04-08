import React from 'react';



const Design = props => {

  handleRadioChange(event){
    const target = event.target;
    props.handleRadioChange(target);
  }

      return (
    
        <div className="color_selected">
           <p className="title special">COLORES</p>
            <ul>
            <li>
             <input 
             className="check" 
             id="colorOne" 
             type="radio" 
             value="colorsCard" 
             name="colorCard" 
             palette="palette1"
             onClick={this.handleRadioChange} />
             <label className="colorPalette">
                 <div className="palette containerColorPalette1"></div>
                 <div className="palette containerColorPalette2"></div>
                 <div className="palette containerColorPalette3"></div>
                </label>
             </li>
            <li>
             <input className="check" 
             id="colorTwo" 
             type="radio" 
             value="colorsCard" 
             name="colorCard" />
             <label className="colorPalette">
                 <div className="palette containerColorPalette4"></div>
                 <div className="palette containerColorPalette5"></div>
                 <div className="palette containerColorPalette6"></div>
             </label>
             </li>
             <li>
             <input className="check" id="color3" type="radio" value="colorsCard" name="colorCard" />
             <label className="colorPalette">
                 <div className="palette containerColorPalette7"></div>
                 <div className="palette containerColorPalette8"></div>
                 <div className="palette containerColorPalette9"></div>
             </label>
            </li>
            </ul>
        </div>
    
      );
}
  
  {/* //cambio de los <li> por <div className="palette">
  //cambio de <div className="containerDesignBottom"> por  <div className="color_selected"> */}

export default Design;