import React from "react";

export default function FeaturesListItem(props) {
  const { feature } = props

  return (
    <li >
      <div>{feature}</div>
  </li>
  )
}
