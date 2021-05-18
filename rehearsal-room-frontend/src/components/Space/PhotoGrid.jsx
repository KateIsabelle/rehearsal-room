import React from 'react'

// const urls = [
//   "https://res.cloudinary.com/davik/image/upload/v1621288184/rehearsal_room/hzpcjjl0uujpcjuiaamy.png",
//   "https://res.cloudinary.com/davik/image/upload/v1621288171/rehearsal_room/uohyg0dfvnfirqit5rsl.png",
//   "https://res.cloudinary.com/davik/image/upload/v1621288157/rehearsal_room/dpghdp2np1hy5htzhc79.png",
//   "https://res.cloudinary.com/davik/image/upload/v1621288150/rehearsal_room/ppfrd9czz2outpwgjzor.png",
//   "https://res.cloudinary.com/davik/image/upload/v1621288142/rehearsal_room/c6gqx6kabvpeq4wkmejj.png"
// ]

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