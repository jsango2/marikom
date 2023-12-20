import { ContentWrap, WrapAllCertifikati, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize.js";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";
import PhotosRow from "../../ProizvodiSection/piktogram/index.js";

const Certifikati = () => {
  const size = useWindowSize();
  return (
    <>
      <WrapAllCertifikati>
        <PhotosRow />
        <ContentWrap></ContentWrap>
      </WrapAllCertifikati>
      {/* <Companies /> */}
    </>
  );
};

export default Certifikati;
