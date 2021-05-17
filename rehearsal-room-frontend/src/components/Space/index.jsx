import React, { useEffect, useState, Fragment } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

import useSpaceData from '../../hooks/useSpaceData'

import RentalRequest from '../RentalRequest/index'
import Space_Show from './Space_Show'


export default function Space(props) {
  const { 
    state, 
    togglePopUp,
    setVisualMode,
    reroute
   } = useSpaceData();


  return (

    <article className="space-container">
    { state.visualMode === "SPACE_SHOW" &&
      <Space_Show 
      spaceData={{...state.spaceData}}
      popUp={state.popUp}
      yesButtonFunc={() => reroute('/dashboard')}
      noButtonFunc={() => togglePopUp(false)}
      setVisualMode={setVisualMode}
      reroute={reroute}
      />
  }
  {state.visualMode === "REQUEST_FORM" &&
    <RentalRequest user_id={props.user_id} space_id={state.spaceData.id} space={state.spaceData} setVisualMode={() => setVisualMode("SPACE_SHOW")} setPopUp={() => togglePopUp(true)}/>
}

        </article>

  )

}
