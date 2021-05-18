import React from "react";

export default function FeaturesListItem(props) {
  const { feature } = props

  const icon = <i class="fas fa-check"></i>

  return (
    <li >
      <div style={{"white-space": "pre"}}>{icon}   {feature}</div>
  </li>
  )
}
