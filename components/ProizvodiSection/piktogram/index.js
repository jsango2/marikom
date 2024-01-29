import { WrapAll, WrapImage } from "./style.js";
import Image from "next/image";
import p1 from "../../../assets/images/Piktogrami.png";

import { ContentWrap, HeroTitle, HeroWrap } from "./style.js";
import useWindowSize from "../../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

function PhotosRow() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  const size = useWindowSize();
  return (
    <WrapAll ref={ref} inView={inView}>
      <WrapImage>
        <Image src={p1} alt="overlay" layout="fill" objectFit="cover" />
      </WrapImage>
    </WrapAll>
  );
}

export default PhotosRow;
