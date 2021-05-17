import React from 'react'

export default function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      <div className="col"><img className="photo-grid-item" src="https://res.cloudinary.com/davik/image/upload/v1621288184/rehearsal_room/hzpcjjl0uujpcjuiaamy.png" alt=""/></div>
      <div className="col"><img className="photo-grid-item" src="https://res.cloudinary.com/davik/image/upload/v1621288171/rehearsal_room/uohyg0dfvnfirqit5rsl.png" alt=""/></div>
      <div className="col"><img className="photo-grid-item" src="https://res.cloudinary.com/davik/image/upload/v1621288157/rehearsal_room/dpghdp2np1hy5htzhc79.png" alt=""/></div>
      <div className="col"><img className="photo-grid-item" src="https://res.cloudinary.com/davik/image/upload/v1621288150/rehearsal_room/ppfrd9czz2outpwgjzor.png" alt=""/></div>
      <div className="col"><img className="photo-grid-item" src="https://res.cloudinary.com/davik/image/upload/v1621288142/rehearsal_room/c6gqx6kabvpeq4wkmejj.png" alt=""/></div>
    </div>
  )
}