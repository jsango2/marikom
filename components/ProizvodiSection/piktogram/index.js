import { WrapAll, WrapImage } from "./style.js";
import Image from "next/image";
import p1 from "../../../assets/images/Piktogrami.png";

import { ContentWrap, HeroTitle, HeroWrap } from "./style.js";
import useWindowSize from "../../helper/usewindowsize.js";

function PhotosRow() {
  const size = useWindowSize();
  return (
    <WrapAll>
      <WrapImage>
        <Image src={p1} alt="overlay" layout="fill" objectFit="cover" />
      </WrapImage>
    </WrapAll>
  );
}

export default PhotosRow;
