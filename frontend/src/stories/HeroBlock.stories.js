import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { HeroV1, HeroV2 } from '../components/HeroBlock/heroV1'

export const HeroComponent = () => 
<HeroV1/>

export default {
  title: 'Components/Hero',
  component: HeroComponent,
}
