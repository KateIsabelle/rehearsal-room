import React, { useState } from "react";
import { TextField, Button, Checkbox, DatePicker } from '@material-ui/core';

export default function RequestForm(props) {
   const { formState, handleChange } = props;

  return (
    <>
      
      <h1>Rental Request Form</h1>

      <form>
      
      <label for="usage_decript">
        Brief description of activity:
      </label>
          <TextField name="usage_descript" value={formState.usage_descript} onChange={handleChange} id="outlined-basic" variant="outlined" />

      <label>Select a date: </label>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
      


      <label for="start_time">Select a start time: </label>
        <TextField
          id="time"
          name="start_time"
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
      

      <label for="end_time">Select an end time: </label>
        <TextField
          id="time"
          name="end_time"
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
      

      
          <label for="used_before"> Have you rented this space before? </label>
            <Checkbox
              defaultChecked
              name="used_before"
              color="primary"
              checked={formState.used_before} 
              onChange={handleChange}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        
        

      
        <label>Is this a multi-day rental?</label>
          
          <input type="checkbox"/>
        
      


     
        <label> 
          Host (insert-host-name-here), acknowledges the diverse realities of local artists. If you are interested in future alternative workexchange options to offset space rental rates please check here.
        </ label>
        <input type="checkbox"/>
         
        

      
      <label for="email"> Please confirm your email below (required): </label>
            <TextField name="email" id="outlined-basic" variant="outlined" />

      <Button variant="contained" color="primary">
         Submit
      </Button>
      

      </form>
    </>
    
    
  )

}


