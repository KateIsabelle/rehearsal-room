import React from "react";

import useSpaceData from '../../hooks/useSpaceData'

import RentalRequest from '../RentalRequest/index'
import SpaceShow from './Space_Show'

export default function Space(props) {
  const { 
    state, 
    togglePopUp,
    setVisualMode,
    reroute, 
    smallImgUrls // array 
   } = useSpaceData();

  return (

    <article className="space-container">
      { state.visualMode === "SPACE_SHOW" &&
        <SpaceShow 
        spaceData={{...state.spaceData}}
        popUp={state.popUp}
        yesButtonFunc={() => reroute('/dashboard')}
        noButtonFunc={() => togglePopUp(false)}
        setVisualMode={setVisualMode}
        reroute={reroute}
        smallImgUrls={smallImgUrls}
        user_email={props.user_email}
        />
      }
      { state.visualMode === "REQUEST_FORM" &&
        <RentalRequest user_id={props.user_id} space_id={state.spaceData.id} space={state.spaceData} setVisualMode={() => setVisualMode("SPACE_SHOW")} setPopUp={() => togglePopUp(true)}/>
      }
    </article>

  )

}
