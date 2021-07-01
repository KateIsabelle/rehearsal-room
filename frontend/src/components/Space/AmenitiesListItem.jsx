import React from "react";

export default function FeaturesListItem(props) {
  const { feature } = props

  const icon = <i className="fas fa-check"></i>

  return (
    <li >
      <div style={{"whiteSpace": "pre"}}>{icon}   {feature}</div>
  </li>
  )
}
