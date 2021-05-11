import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RentalRequest from '../components/RentalRequest/index'

export const RentalRequestComponent = () => {
  return <RentalRequest />
}

export default {
  title: 'Components/RentalRequest',
  component: RentalRequestComponent,
}
