//Spaces is the main page

import React from "react";
import { Fragment } from "react";
import SpaceList from './SpaceList'

// const spacesData = [
//   {
//     id: 1,
//     user_id: 1,
//     thumbnail_photo_url: "http://cdn.home-designing.com/wp-content/uploads/2015/08/simple-interior-design.jpg"
//   },
//   {
//     id: 1,
//     user_id: 1,
//     thumbnail_photo_url: "https://images.dwell.com/photos-6242537032151076864/6495845600185012224-medium/luckdrops-studio-is-a-one-bedroom-one-bathroom-shipping-container-home-with-287-square-feet-of-living-space-the-dollar38000-home-features-light-bright-and-modern-interiors-that-are-miles-away-from-what-you-might-expect-the-inside-of-a-shipping-container-t.jpg"
//   },
//   {
//     id: 1,
//     user_id: 1,
//     thumbnail_photo_url: "https://snobette.com/wp-content/uploads/2020/04/drake-toronto-home-interior-1024x752.jpg"
//   },
//   {
//     id: 1,
//     user_id: 1,
//     thumbnail_photo_url: "https://i.pinimg.com/originals/00/1a/40/001a40069ceb074d63c3702e70c416c2.jpg"
//   },
// ]

export default function Spaces(props) {
  const { spacesData } = props

  return (
    <Fragment>
      <form>
        <input type="text"></input>
      </form>
      <SpaceList 
      spaces={spacesData}
      />
    </Fragment>
  )
}