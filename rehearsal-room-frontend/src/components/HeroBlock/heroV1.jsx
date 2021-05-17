import React from "react";
import './_Hero.scss'

//build an array of images
//loop through array of immages every 5000
//

export default function HeroV1(props) {
  const imgArr = [
    {},
    {},
    {}
  ]
  return (
    <tag>
      <div id="container">
      {/* <img id="image" sizes="100vw" src="
      https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1621230600/dance_mirror.jpg"
      /> */}
      <img id="image" sizes="100vw" src="https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620667456/dramatic_dude.jpg" />

      {/* <img id="image" sizes="100vw" src="https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1621231127/fingers_piano.jpg" /> */}

      </div>

    </tag>
  )

}


//reminder: AN has aspirations to build 3 Hero versions that roate
export function HeroV2(props) {
  return (
    <tag>
      <div id="container">
      <img id="image" sizes="100vw" src="https://res.cloudinary.com/dyo7gkw5s/image/upload/w_auto,c_fill,ar_3:1,g_center/l_text:Arial_120_bold:Artists Looking For Space. Spaces Available for Artists.,co_rgb:FFF/v1620667456/shutterstock_786636211_1_ewbszy.jpg"/>
      </div>

    </tag>
  )

}




