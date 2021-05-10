import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SpaceListItem from '../components/Spaces/SpaceListItem'
import SpaceList from '../components/Spaces/SpaceList'
import Spaces from '../components/Spaces/index'
import SearchForm from '../components/Spaces/SearchForm'

const spacesData = [
  {
    id: 1,
    thumbnail_photo_url: "http://cdn.home-designing.com/wp-content/uploads/2015/08/simple-interior-design.jpg"
  },
  {
    id: 2,
    thumbnail_photo_url: "https://images.dwell.com/photos-6242537032151076864/6495845600185012224-medium/luckdrops-studio-is-a-one-bedroom-one-bathroom-shipping-container-home-with-287-square-feet-of-living-space-the-dollar38000-home-features-light-bright-and-modern-interiors-that-are-miles-away-from-what-you-might-expect-the-inside-of-a-shipping-container-t.jpg"
  },
  {
    id: 3,
    thumbnail_photo_url: "https://snobette.com/wp-content/uploads/2020/04/drake-toronto-home-interior-1024x752.jpg"
  },
  {
    id: 4,
    thumbnail_photo_url: "https://i.pinimg.com/originals/00/1a/40/001a40069ceb074d63c3702e70c416c2.jpg"
  },
]

// export const SpaceListItemComponent = (props) => {
//  return <SpaceListItem 
//     key={spacesData[0].id}
//     spaceId={spacesData[0].id}
//     photoUrl={spacesData[0].thumbnail_photo_url}
//   />
// }


export const SpaceListComponent = (props) => {
  return <SpaceList
     spaces={spacesData}
   />
 }
export const SpaceListItemComponent = (props) => {
 return <SpaceListItem 
    key={spacesData[0].id}
    spaceId={spacesData[0].id}
    photoUrl={spacesData[0].thumbnail_photo_url}
  />
 
}

export const SpacesComponent = () => {
  return <Spaces 
    spacesData={spacesData}
   />
 }

 export const SearchFormComponent = () => {
  return <SearchForm />
 }

export default {
  title: 'Components/Spaces',
  component: SpaceListComponent,
}