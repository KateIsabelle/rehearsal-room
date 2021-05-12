import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Constants
import { AMENITIES } from '../constants'

export default function SearchForm(props) {
  const { 
    formState,
    onChange,
    advancedState,
    onAdvancedClick,
    onClearClick
  } = props;
  const amenitiesList = Object.keys(AMENITIES).map(key => {
    return(
      <FormControlLabel
        key={key}
        control={
          <Checkbox
            checked={formState[key]}
            onChange={onChange}
            name={key}
          />}
        label={AMENITIES[key]}
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
        <Button 
          id="clear-filters"
          name="clear-filters"
          label="Clear all filters"
          onClick={onClearClick}>
          Clear all filters
        </Button>
        {advancedState.show && <ul>{amenitiesList}</ul>}
      </form>


  )

}
