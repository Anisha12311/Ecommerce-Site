import React from 'react'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';

const ColorRam = () => {
  return (
    <div>
       
      {[{Color : ['Red', 'Yellow', 'White']},{Ram : ['1 TB', '2 TB', '3 TB']}].map((item,idx) => (
         <div key = {idx}>
            <h3>{Object.keys(item)}</h3>
        {item[Object.keys(item)].map((items,idx) => (
             <div style={{ display: "flex" }} key = {idx}>
             <FormControlLabel control={<Checkbox />} label= {items} />
      </div>
        ))}
  </div>
      ))}
    </div>
  )
}

export default ColorRam
