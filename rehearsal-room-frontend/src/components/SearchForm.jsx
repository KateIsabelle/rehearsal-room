import React from "react";


export default function SearchForm(props) {
  const { register, onSubmit, handleSubmit, amenities, showAdvanced } = props;
  const amenitiesList = Object.keys(amenities).map(key => {
    return(
      <li key={key}>
        <label for={key}>{amenities[key]}</label>
        <input type="checkbox" {...register(key)} />
      </li>
    );
  })
  return (
      <form>
        <label for="keyword">Keyword Search:</label>
        <input type="text" {...register("keyword")} />
        <label for="showAdvanced">Advanced Search</label>
        <input type="checkbox" {...register("showAdvanced")} />
        {showAdvanced && <ul>{amenitiesList}</ul>}
      </form>


  )

}
