import React from 'react'

export default function PhotoGrid({ smallImgUrls }) {
  return (
    <div className="photo-grid">
      <div className="img-cont">
        <img className="photo-grid-item" src={smallImgUrls[0]} alt=""/>
      </div>
      <div className="img-cont">
        <img className="photo-grid-item" src={smallImgUrls[1]} alt=""/>
      </div>
      <div className="img-cont">
        <img className="photo-grid-item" src={smallImgUrls[2]} alt=""/>
      </div>
      <div className="img-cont">
        <img className="photo-grid-item" src={smallImgUrls[3]} alt=""/>
      </div>
      <div className="img-cont">
        <img className="photo-grid-item" src={smallImgUrls[4]} alt=""/>
      </div>
    </div>
  )
}