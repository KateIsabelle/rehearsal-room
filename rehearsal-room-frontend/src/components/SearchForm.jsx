import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function SearchForm(props) {
  const { 
    formState,
    onChange,
    amenities,
    advancedState,
    onAdvancedClick
  } = props;
  const amenitiesList = Object.keys(amenities).map(key => {
    return(
      <FormControlLabel
        control={
          <Checkbox
            checked={formState[key]}
            onChange={onChange}
            name={key}
          />}
        label={amenities[key]}
      />
    );
  })
  return (
      <form>
        <TextField 
          id="keyword"
          name="keyword"
          label="Search"
          variant="filled"
          value={formState.keyword}
          onChange={onChange}
        />
        <Button
          color="primary"
          onClick={onAdvancedClick}
        >
          {advancedState.text}
        </Button>
        {advancedState.show && <ul>{amenitiesList}</ul>}
      </form>


  )

}
