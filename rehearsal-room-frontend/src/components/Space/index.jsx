import React from "react";


export default function Space(props) {
  const { title, description, cover_photo_url } = props
  return (

    <article className="">

      <h1>{title}</h1>
      <p>{description}</p>
      <img src={cover_photo_url} alt="property" width="600" height="400"></img>
    
    </article>

  )

}