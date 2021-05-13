import React from "react";
import { Image, Transformation } from "cloudinary-react";
import './hero.css'

export default function HeroV1(props) {
  return (
    <tag>
      <div id="container">
        <img id="image" sizes="100vw" src="https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620667456/mostafa-meraji-Jby30ALhnms-unsplash_olrgbs.jpg"/>
      </div>

    </tag>
  )

}


//reminder: AN has aspirations to build 3 Hero versions that roate
export function HeroV2(props) {
  return (
    <tag>
      <div id="container">
        <img id="image" sizes="100vw" src="https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620667456/elijah-m-henderson-xgT3iQDIijU-unsplash_lmqcd5.jpg"/>
      </div>

    </tag>
  )

}