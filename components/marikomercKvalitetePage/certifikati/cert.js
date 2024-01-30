import {
  WrapSingleCert,
  CardText,
  WrapImages,
  WrapCertImage,
  Overlay,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import { useInView } from "react-intersection-observer";

const Cert = ({ text, ISO, MSC, IFS, ZZ, ASC }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const size = useWindowSize();
  return (
    <>
      <WrapSingleCert ref={ref} className={` ${inView ? "inView" : "outView"}`}>
        <Overlay />
        <WrapImages>
          {ISO && (
            <WrapCertImage>
              <Image src="/certifikat/ISO9001.svg" layout="fill" />
            </WrapCertImage>
          )}
          {MSC && (
            <WrapCertImage>
              <Image src="/certifikat/MSC.svg" layout="fill" />
            </WrapCertImage>
          )}
          {ASC && (
            <WrapCertImage>
              <Image src="/certifikat/ASC.svg" layout="fill" />
            </WrapCertImage>
          )}
          {IFS && (
            <WrapCertImage>
              <Image src="/certifikat/IFSfood.svg" layout="fill" />
            </WrapCertImage>
          )}
          {ZZ && (
            <WrapCertImage>
              <Image src="/certifikat/zivjetizdravo.svg" layout="fill" />
            </WrapCertImage>
          )}
        </WrapImages>
        <CardText>{text}</CardText>
      </WrapSingleCert>
      {/* <Companies /> */}
    </>
  );
};

export default Cert;
