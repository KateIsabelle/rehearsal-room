//Spaces is the main page

import React from "react";
import { Fragment } from "react";
import SpaceList from './SpaceList'
import SearchForm from '../SearchForm'

export default function Spaces(props) {
  const { spacesData } = props

  return (
    <Fragment>
      <SearchForm />
      <SpaceList
      spaces={spacesData}
      />
    </Fragment>
  )
}