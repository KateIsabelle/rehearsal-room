import React from "react";
import { Image, Transformation } from "cloudinary-react";

export default function HeroV1(props) {
  return (
    <tag>

    <Image cloudName="dyo7gkw5s" publicId="mostafa-meraji-Jby30ALhnms-unsplash_olrgbs.jpg">
      <Transformation quality="auto" fetchFormat="auto" />
      <Transformation flags="ignore_aspect_ratio" height="800" crop="crop" />
      <Transformation overlay={{fontFamily: "Arial", fontSize: 120, fontWeight: "bold", text: "Artists Looking For Space. Spaces Available for Artists."}} effect="colorize" color="#F5F9FC" />
    </Image>
    </tag>
  )

}

//reminder: AN has aspirations to build 3 Hero versions that roate
export function HeroV2(props) {
  return (
    <tag>


    <Image cloudName="dyo7gkw5s" publicId="elijah-m-henderson-KoQxb6taoLA-unsplash_ojouty.jpg" >
      <Transformation quality="auto" fetchFormat="auto" />
      <Transformation flags="ignore_aspect_ratio" height="800" crop="crop" />
      <Transformation overlay={{fontFamily: "Arial", fontSize: 120, fontWeight: "bold", text: "Artists Looking For Space. Spaces Available for Artists."}} effect="colorize" color="#F5F9FC" />
    </Image>
    </tag>
  )

}