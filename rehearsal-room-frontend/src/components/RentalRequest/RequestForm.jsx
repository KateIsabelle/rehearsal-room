import React, { useState } from "react";
import { TextField, Button, Checkbox, DatePicker } from '@material-ui/core';

export default function RequestForm(props) {
  const [value, setValue] = useState("")
  const handleChange = event => {
    console.log(event.target.value)
    setValue(event.target.value)
  }
  return (
    <tag>
      
      <h1>Rental Request Form</h1>

      <form>
      
      <label>
        Brief description of activity:
      </label>
          <TextField value={value} onChange={handleChange} label="Brief description of activity:" id="outlined-basic" variant="outlined" />

      
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
    


      
        <TextField
          id="time"
          label="Start Time"
          type="time"
          defaultValue="10:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      

      
        <TextField
          id="time"
          label="End Time"
          type="time"
          defaultValue="17:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      

      
          <label>
            Have you rented this space before?
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </label>
        

      
        <label>
          Is this a multi-day rental?
          <input type="checkbox"/>
        </label>
      


     
          <label>
          Host (insert-host-name-here), acknowledges the diverse realities of local artists. If you are interested in future alternative workexchange options to offset space rental rates please check here.
          <input type="checkbox"/>
          </label>
        

      
      <label for="email">
        Please confirm your email below (required):
      </label>
            <TextField name="email" value={value} onChange={handleChange} id="outlined-basic" variant="outlined" />

      <Button variant="contained" color="primary">
         Submit
      </Button>
      

      </form>
    </tag>
    
    
  )

}


