import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from '../components/Header/index'

const userA = 
{
  "id": 1,
  "first_name": "Mabel",
  "last_name": "Golden",
  "organization_name": "The Cultch",
  "email": "mabel.g@thecultch.ca",
  "phone": "16045551234",
  "password": "password",
  "photo": "https://image.shutterstock.com/image-photo/funny-grandmother-portraits-senior-old-260nw-1522642592.jpg",
  "description": "Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. If we're going to have animals around we all have to be concerned about them and take care of them. This is your world. It's cold, but it's beautiful.",
  "is_host": true
  }

// export const HeaderComponent = () => <Header />

export const HeaderComponent = () => {
  return <Header 
  {...userA}
  />
}

export default {
  title: 'Components/Space',
  component: HeaderComponent,
}

