import React, {Fragment  } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RentalRequest from '../components/RentalRequest/index'
import RequestForm from '../components/RentalRequest/RequestForm'

export const RentalRequestComponent = () => {
  return <RentalRequest />
}

export const RequestFormComponent = () => {
  return <RequestForm />
 }

export default {
  title: 'Components/RentalRequest',
  component: RentalRequestComponent,
}

