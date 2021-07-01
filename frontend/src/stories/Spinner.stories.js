import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Spinner from '../components/Spinner'

export const SpinnerComponent = () => {
  return <Spinner />
}

export default {
  title: 'Components/Spinner',
  component: SpinnerComponent,
}

