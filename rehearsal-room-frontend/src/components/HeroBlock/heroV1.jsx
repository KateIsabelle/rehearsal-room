import React, {useEffect, useState} from "react";
import './_Hero.scss'


export default function HeroV1(props) {
  const [currentImage, setCurrentImage] = useState("")
  const bannerImgArr = [
    "https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1621230600/dance_mirror.jpg",
    "https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620667456/dramatic_dude.jpg",
    "https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_170_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620877221/violin.jpg"
  ]
  useEffect(() => {
    const selectImage = bannerImgArr[Math.floor(Math.random()* 3)];
    setCurrentImage(selectImage);
  }, [])

  return (
    <>
      <div id="banner-container">
      <img className="image" sizes="100vw" src={currentImage}/>
      </div>
    </>
  )
}