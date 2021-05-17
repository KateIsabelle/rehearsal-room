import React from "react";

export default function FeaturesListItem(props) {
  const { feature } = props

  const icon = <i class="fas fa-wifi"></i>

  return (
    <li >
      <div>{feature === "Wifi" && icon}{feature}</div>
  </li>
  )
}
