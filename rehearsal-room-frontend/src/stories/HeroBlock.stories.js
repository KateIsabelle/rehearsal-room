import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import HeroBlock from '../components/HeroBlock/index'

export const HeroComponent = () => <HeroBlock />

export default {
  title: 'Components/Hero',
  component: HeroComponent,
}
