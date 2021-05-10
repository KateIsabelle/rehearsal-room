import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from '../components/Header/index'


export const HeaderComponent = () => <Header />


export default {
  title: 'Components/Space',
  component: HeaderComponent,
}
