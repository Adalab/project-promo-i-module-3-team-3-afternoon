import React from 'react';

const Design = props => {
  const handleRadioChange = (event) => {
    let target = event.target
    props.handleRadioChange(target)
    console.log(event.target)
  }
  return (
    <div className="color_selected">
      <p className={`title special ${props.darkMode === true ? "dark" : "light"}`}>COLORES</p>
        <ul>
          <li>
            <input
              className="check" 
              id="palette1" 
              type="radio" 
              value="palette1" 
              name="colorCard" 
              onChange={handleRadioChange} 
              checked={props.palette === 'palette1'}
            />
            <label className="colorPalette">
              <div className="palette containerColorPalette1"></div>
              <div className="palette containerColorPalette2"></div>
              <div className="palette containerColorPalette3"></div>
            </label>
          </li>
          <li>
            <input className="check" 
              id="palette2" 
              type="radio" 
              value="palette2" 
              name="colorCard"
              onChange={handleRadioChange}  
              checked={props.palette === 'palette2'}
            />
            <label className="colorPalette">
              <div className="palette containerColorPalette4"></div>
              <div className="palette containerColorPalette5"></div>
              <div className="palette containerColorPalette6"></div>
            </label>
          </li>
          <li>
            <input className="check" 
              id="palette3" 
              type="radio" 
              value="palette3" 
              name="colorCard" 
              checked={props.palette === 'palette3'}
              onChange={handleRadioChange} />
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

export default Design;