import Piktogram from "./piktogram/index.js";
import {
  WrapAll,
  WrapImage2,
  Overlay,
  WrapBg,
  Title,
  Text,
  WrapImage,
  WrapCerts,
} from "./style.js";
import Image from "next/image";

import overlay from "../../assets/images/overlay.png";
import ProizvodiCLoud from "./proizvodiCloud/index.js";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useScrollPercentage } from "react-scroll-percentage";
import { useInView } from "react-intersection-observer";
function CertsComp() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapCerts ref={ref} inView={inView}>
      <WrapImage>
        <Image src="/certifikat/MSC.svg" height={62} width={173} />
      </WrapImage>
      <WrapImage>
        <Image src="/certifikat/ASC.svg" height={62} width={130} />
      </WrapImage>

      <WrapImage>
        <Image src="/certifikat/IFSfood.svg" height={62} width={113} />
      </WrapImage>

      <WrapImage>
        {" "}
        <Image src="/certifikat/zivjetizdravo.svg" height={62} width={85} />
      </WrapImage>

      <WrapImage>
        {" "}
        <Image src="/certifikat/ISO9001.svg" height={62} width={70} />
      </WrapImage>
    </WrapCerts>
  );
}

export default CertsComp;
