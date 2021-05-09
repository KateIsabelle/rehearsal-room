import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Navbar from '../components/Navbar/index'


export const NavbarComponent = () => <Navbar />


export default {
  title: 'Components/Space',
  component: NavbarComponent,
}
