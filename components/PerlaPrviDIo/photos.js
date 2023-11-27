import Image from "next/image";
import React from "react";
import { WrapPhotos, Photo1, Photo2, Photo3, Photo4 } from "./style.js";
import p1 from "../../assets/images/mapa/a.png";
import p2 from "../../assets/images/mapa/p2.png";
import p3 from "../../assets/images/mapa/aaa.png";
import p4 from "../../assets/images/mapa/aa.png";
const Photos = () => {
  return (
    <WrapPhotos>
      <Photo1>
        <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
      </Photo1>
      <Photo2>
        <Image src={p2} alt="p2" layout="fill" objectFit="cover" />
      </Photo2>
      <Photo3>
        <Image src={p3} alt="p3" layout="fill" objectFit="cover" />
      </Photo3>
      <Photo4>
        <Image src={p4} alt="p4" layout="fill" objectFit="cover" />
      </Photo4>
    </WrapPhotos>
  );
};

export default Photos;
