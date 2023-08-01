import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
const SortCategory = () => {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  return (
    <div>
        <h3 style = {{margin : '0px'}}>Sort by</h3>
      <FormControl sx={{ m: 1, minWidth: 120 ,fontSize : '12px',}}>
        <InputLabel id="demo-controlled-open-select-label" style = {{fontSize : '12px'}}>Sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
          style = {{fontSize : '12px'}}
        >
          <MenuItem value=""  style = {{fontSize : '12px'}}>
            <em>None</em>
          </MenuItem>
          <MenuItem  style = {{fontSize : '12px'}} value={10}>Price: Low to High</MenuItem>
          <MenuItem  style = {{fontSize : '12px'}} value={20}>Price: Hight to Low</MenuItem>
          <MenuItem  style = {{fontSize : '12px'}} value={30}>Customer rating</MenuItem>
          <MenuItem  style = {{fontSize : '12px'}} value={30}>Name: A to Z</MenuItem>
          <MenuItem  style = {{fontSize : '12px'}} value={30}>Name : Z to A</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SortCategory
